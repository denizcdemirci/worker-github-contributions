import { Schema } from 'muninn';
import { type CheerioAPI } from 'cheerio'
import { Contribution } from './types/base';

const getCount = ($: CheerioAPI, index: number) => {
  const count = $(`tool-tip:nth-child(${index + 1})`).text();
  return count?.startsWith('No') ? 0 : parseInt(count[0]);
};

export const createSchema = ($: CheerioAPI): Schema => ({
  contributions: {
    selector: 'td.ContributionCalendar-day | array',
    schema: {
      date: '@ data-date',
      level: '@ data-level | number',
    },
    arrayTransform: (arr) =>
      (arr as Contribution[]).map((item, index) => ({
        ...item,
        count: getCount($, index),
      })),
  },
});
