import { Page } from '@/components/nav/Page';
import { useTranslation } from '@/services/i18n/i18n.hooks';

export const AdminPage = () => {
  const t = useTranslation();

  return (
    <Page
      padding
      title={t('page.admin.title')}
      tabTitle={t('page.admin.title')}
    >
      <p>🤙</p>
    </Page>
  );
};
