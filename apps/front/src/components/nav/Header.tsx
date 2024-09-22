import { Link } from '@tanstack/react-router';
import { Button } from '../ui/button';
import { SettingsPopupMenu } from '../settingsPopupMenu/SettingsPopupMenu';
import { useTranslation } from '@/services/i18n/i18n.hooks';

export const Header = () => {
  const t = useTranslation();

  return (
    <div id="header" className="p-3 border-b flex justify-between">
      <div className="flex gap-x-4">
        <Link to="/market">
          <Button variant="link">{t('page.market.title')}</Button>
        </Link>
        <Link to="/admin">
          <Button variant="link">{t('page.admin.title')}</Button>
        </Link>
      </div>

      <SettingsPopupMenu />
    </div>
  );
};
