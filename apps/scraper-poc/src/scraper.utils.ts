import { htmlToJson } from '@contentstack/json-rte-serializer';
import { JSDOM } from 'jsdom';
import { IHtmlTag, WIKIPEDIA_URL } from './scraper.models';
import { IDriverRecord } from '@gordon/models';
import fs from 'fs';

export const fetchWiki = (wikiKey: string): Promise<IHtmlTag[]> =>
  fetch(`${WIKIPEDIA_URL}/${wikiKey}`)
    .then((res) => res.text())
    .then((html) => {
      const htmlDoc = new JSDOM(html).window.document;
      const jsonValue = htmlToJson(htmlDoc.querySelector('.mw-content-ltr'));

      if (!jsonValue)
        throw new Error(`No data found from page ${WIKIPEDIA_URL}/${wikiKey}`);
      return jsonValue.children;
    });

export const getRacingRecordIndex = (elements: IHtmlTag[]) =>
  elements.findIndex((el) => el?.children?.[0]?.attrs?.id === 'Racing_record');

export const isTableTitle = (el: IHtmlTag) => {
  const firstChild = el.children?.[0];
  const firstGrandChild = firstChild?.children?.[0]?.text;

  if (!firstChild || !firstGrandChild) return false;

  return (
    el?.attrs?.['class-name'] === 'mw-heading mw-heading3' &&
    firstChild.type === 'h3'
  );
};

export const isTable = (el: IHtmlTag) =>
  el.attrs?.['class-name'] === 'wikitable';

export const formatTableTitle = (el: IHtmlTag) =>
  el?.children?.[0]?.children?.[0]?.text
    ?.replace('Complete ', '')
    .replace(' results', '');

export const formatTable = (table: IHtmlTag): IDriverRecord[] => {
  if (table.type !== 'table')
    throw new Error(`Element ${table.type} is not a table`);

  return [];
};

export const parsePageContent = (elements: IHtmlTag[]) => {
  const racingRecordIndex = getRacingRecordIndex(elements);
  console.log({ racingRecordIndex });

  const formatted = elements
    .filter((_, index) => index > racingRecordIndex)
    .map((el, index) => {
      if (isTableTitle(el))
        return {
          title: formatTableTitle(el)
        };
      if (isTable(el)) return { records: formatTable(el) };
    })
    .filter((el) => el !== undefined);

  console.log(formatted);
  // console.log(JSON.stringify(formatted, null, 2));

  fs.writeFileSync('output.json', JSON.stringify(formatted, null, 2));
};
