import { Page } from '@/components/nav/Page';
import { driverRoute } from '@services/router/routes.router';
import { useDriver } from './drivers.api';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DRIVER_CARDS_TAB,
  DRIVER_OVERVIEW_TAB,
  DRIVER_RECORDS_TAB
} from './drivers.models';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { DriverRecordsTab } from './tabs/DriverRecordsTab';
import { DriverOverviewTab } from './tabs/DriverOverviewTab';
import { DriverCardsTab } from './tabs/DriverCardsTab';

export const DriverPage = () => {
  const { id } = driverRoute.useParams();
  const t = useTranslation();

  const { data: driver, isPending, isError, error } = useDriver(id);

  if (isPending) return <div>Loading driver...</div>;

  if (isError)
    return (
      <div>
        Error: {error.message} code: {error.code}
      </div>
    );

  return (
    <Page>
      <Tabs defaultValue={DRIVER_OVERVIEW_TAB}>
        <TabsList className="border-b w-full justify-start">
          <TabsTrigger value={DRIVER_OVERVIEW_TAB}>
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
          <DriverOverviewTab driver={driver} />
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
