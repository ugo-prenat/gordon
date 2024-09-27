import { Page } from '@/components/nav/Page';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { DriverCardsTab } from './tabs/DriverCardsTab';
import { DriverOverviewTab } from './tabs/DriverOverviewTab';
import { DriverRecordsTab } from './tabs/DriverRecordsTab';
import {
  DRIVER_CARDS_TAB,
  DRIVER_OVERVIEW_TAB,
  DRIVER_RECORDS_TAB
} from './drivers.models';
import { ITab, SlidingTabs } from '@/components/SlidingTabs';

export const DriverPage = () => {
  const t = useTranslation();

  const tabs: ITab[] = [
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
    <Page>
      <SlidingTabs tabs={tabs} defaultTab={DRIVER_OVERVIEW_TAB} />
    </Page>
  );
};
