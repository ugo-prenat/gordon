import { IDriver, IInsertDBRecord } from '@gordon/models';
import { buildRecords, fetchWiki, parsePageContent } from './scraper.utils';
import { MessageBuilder, Webhook } from 'discord-webhook-node';

export const scrapRecords = (drivers: IDriver[]): Promise<IInsertDBRecord[]> =>
  Promise.all(drivers.map(getDriverRecords)).then((records) => records.flat());

const getDriverRecords = (driver: IDriver): Promise<IInsertDBRecord[]> =>
  fetchWiki(driver.wikiKey).then((elements) => {
    const { recordedChampionships, id } = driver;

    const parsedRecords = parsePageContent(elements, recordedChampionships);
    const records = buildRecords(parsedRecords, id);

    console.log(`${driver.id} - ${records.length} records found`);
    return records;
  });

export const notify = () => {
  const hook = new Webhook(process.env.DISCORD_WEBHOOK_URL!);
  const embed = new MessageBuilder()
    // .setTitle('My title here')
    // .setDescription('Oh look a description :)')
    .addField(
      'Formula 1',
      '3 drivers in datbase\n2 drivers updated\nVerstappen : '
    )
    .addField('Formula 2', '1 driver in datbase\n0 driver updated')
    .setColor(0x00b0f4);

  return hook.send(embed);
};
