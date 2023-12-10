## worker-github-contributions

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/denizcdemirci/worker-github-contributions)

This template is a simple GitHub contribution activity wrapper for Cloudflare Workers. It returns the last year of activity history on GitHub. You can use it to display the contribution activity on your website.

[`src/index.ts`](https://github.com/denizcdemirci/worker-github-contributions/blob/main/src/index.ts) is the content of the Workers script.

Here is an example of the response to the script:

```json
[
  {
    "date": "2023-11-30",
    "level": 3,
    "count": 23
  },
  {
    "date": "2023-12-01",
    "level": 4,
    "count": 35
  },
  {
    "date": "2023-12-02",
    "level": 1,
    "count": 1
  },
]
```

`level` is the contribution level of the day. It can be between `0` and `4`. `count` is the number of contributions made on that day.

## Setup

To create a `worker-github-contributions` directory using this template, run:

```sh
$ npx wrangler generate worker-github-contributions https://github.com/denizcdemirci/worker-github-contributions
# or
$ yarn wrangler generate worker-github-contributions https://github.com/denizcdemirci/worker-github-contributions
# or
$ pnpm wrangler generate worker-github-contributions https://github.com/denizcdemirci/worker-github-contributions
```

Before publishing your script, you need to edit the `wrangler.toml` file. Add your GitHub username `GITHUB_USERNAME` to this file.

Once you are ready, you can publish your script by running the following command:

```sh
$ npm run deploy
# or
$ yarn run deploy
# or
$ pnpm run deploy
```

## Thanks

Special thanks to [aykutkardas](https://github.com/aykutkardas) and [kadiryazici](https://github.com/kadiryazici) for their contributions.
