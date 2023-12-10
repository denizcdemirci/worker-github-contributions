import { parse } from 'muninn';
import * as cheerio from 'cheerio';
import { Env, Contribution, Contributions } from './types/base';
import { createSchema } from './utils';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext){
    const getContributions = async () => {
      try {
        const response = await fetch(`https://github.com/users/${env.GITHUB_USERNAME}/contributions`);
        const responseData = cheerio.load(await response.text())
        const parsedData = parse(responseData, { schema: createSchema(responseData) }) as unknown as Contributions;

        return parsedData.contributions.sort((a: Contribution, b: Contribution) => new Date(a.date).getTime() - new Date(b.date).getTime());
      } catch (error: any) {
        throw new Error(error);
      }
    };

    const results = JSON.stringify(await getContributions());

    return new Response(results, {
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      }
    });
  }
};
