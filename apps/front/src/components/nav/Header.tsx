import { Link } from '@tanstack/react-router';
import { Button } from '../ui/button';
import { SettingsPopupMenu } from '../settingsPopupMenu/SettingsPopupMenu';
import { useTranslation } from '@/services/i18n/i18n.hooks';

export const Header = () => {
  const t = useTranslation();

  return (
    <div id="header" className="p-3 border-b flex justify-between">
      <div className="flex gap-x-4 pl-3">
        <Link to="/market" className="flex items-center">
          <Button variant="link">{t('page.market.title')}</Button>
        </Link>
        <Link to="/admin" className="flex items-center">
          <Button variant="link">{t('page.admin.title')}</Button>
        </Link>
      </div>

      <SettingsPopupMenu />
    </div>
  );
};
