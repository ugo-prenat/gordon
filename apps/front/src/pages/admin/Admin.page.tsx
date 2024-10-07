import { Image } from '@/components/Image';
import { Page } from '@/components/nav/Page';
import { useTranslation } from '@/services/i18n/i18n.hooks';

export const AdminPage = () => {
  const t = useTranslation();

  return (
    <Page padding tabTitle={t('admin')}>
      <p>🤙</p>
      <Image src="/v1728329344/pierre-gasly_wmigi7.png" />
    </Page>
  );
};
