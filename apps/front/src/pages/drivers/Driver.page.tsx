import { Page } from '@/components/nav/Page';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { DriverCardsTab } from './tabs/DriverCardsTab';
import { DriverOverviewTab } from './tabs/DriverOverviewTab';
import { DriverRecordsTab } from './tabs/DriverRecordsTab';
import {
  DRIVER_CARDS_TAB,
  DRIVER_OVERVIEW_TAB,
  DRIVER_RECORDS_TAB
} from './drivers.models';

export const DriverPage = () => {
  const t = useTranslation();

  return (
    <Page>
      <Tabs defaultValue={DRIVER_OVERVIEW_TAB}>
        <TabsList className="border-b w-full justify-start">
          <TabsTrigger value={DRIVER_OVERVIEW_TAB} className="ml-3">
            {t('page.driver.tab.overview')}
          </TabsTrigger>
          <TabsTrigger value={DRIVER_RECORDS_TAB}>
            {t('page.driver.tab.records')}
          </TabsTrigger>
          <TabsTrigger value={DRIVER_CARDS_TAB}>
            {t('page.driver.tab.cards')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value={DRIVER_OVERVIEW_TAB}>
          <DriverOverviewTab />
        </TabsContent>
        <TabsContent value={DRIVER_RECORDS_TAB}>
          <DriverRecordsTab />
        </TabsContent>
        <TabsContent value={DRIVER_CARDS_TAB}>
          <DriverCardsTab />
        </TabsContent>
      </Tabs>
    </Page>
  );
};
