import { Page } from '@/components/nav/Page';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { DriverCardsTab } from './tabs/DriverCardsTab';
import { DriverOverviewTab } from './tabs/DriverOverviewTab';
import { DriverRecordsTab } from './tabs/DriverRecordsTab';
import {
  DRIVER_CARDS_TAB,
  DRIVER_OVERVIEW_TAB,
  DRIVER_RECORDS_TAB,
  DriverPageTab
} from './drivers.models';
import { ITab, SlidingTabs } from '@/components/SlidingTabs';
import { driverRoute } from '@/services/router/router.routes';

export const DriverPage = () => {
  const t = useTranslation();
  const { tab } = driverRoute.useSearch();
  const navigate = driverRoute.useNavigate();

  const defaultTab = tab || DRIVER_OVERVIEW_TAB;

  const handleTabClick = (tab: DriverPageTab) => navigate({ search: { tab } });

  const tabs: ITab<DriverPageTab>[] = [
    {
      value: DRIVER_OVERVIEW_TAB,
      content: <DriverOverviewTab />,
      label: t('page.driver.tab.overview')
    },
    {
      value: DRIVER_RECORDS_TAB,
      content: <DriverRecordsTab />,
      label: t('page.driver.tab.records')
    },
    {
      value: DRIVER_CARDS_TAB,
      content: <DriverCardsTab />,
      label: t('page.driver.tab.cards')
    }
  ];

  return (
    <Page tabTitle={t('page.driver.tabTitle')}>
      <SlidingTabs
        tabs={tabs}
        defaultTab={defaultTab}
        onClick={handleTabClick}
      />
    </Page>
  );
};
