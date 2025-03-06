import { Page } from '@/components/nav/Page';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { ITab, SlidingTabs } from '@/components/SlidingTabs';
import {
  MARKET_CHASSIS_TAB,
  MARKET_DRIVERS_TAB,
  MarketTab
} from './market.models';
import { MarketDriversTab } from './tabs/MarketDriversTab';
import { MarketChassisTab } from './tabs/MarketChassisTab';
import { marketRoute } from '@/services/router/router.routes';
import { useState } from 'react';
import { buildTabTitle } from './market.utils';

export const MarketPage = () => {
  const t = useTranslation();
  const { tab, ...defaultFilters } = marketRoute.useSearch();
  const navigate = marketRoute.useNavigate();

  const defaultTab = tab || MARKET_DRIVERS_TAB;
  const [tabTitle, setTabTitle] = useState(t(buildTabTitle(defaultTab)));

  const handleTabClick = (newTab: MarketTab) => {
    const tab = newTab === MARKET_DRIVERS_TAB ? undefined : newTab;
    navigate({ search: { tab } });
    setTabTitle(t(buildTabTitle(newTab)));
  };

  const tabs: ITab<MarketTab>[] = [
    {
      label: t('drivers'),
      value: MARKET_DRIVERS_TAB,
      content: <MarketDriversTab defaultFilters={defaultFilters} />
    },
    {
      label: t('chassis'),
      value: MARKET_CHASSIS_TAB,
      content: <MarketChassisTab />
    }
  ];

  return (
    <Page tabTitle={tabTitle}>
      <SlidingTabs
        tabs={tabs}
        defaultTab={defaultTab}
        onClick={handleTabClick}
      />
    </Page>
  );
};
