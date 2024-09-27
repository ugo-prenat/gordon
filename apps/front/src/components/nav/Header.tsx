import { Link } from '@tanstack/react-router';
import { Button } from '../ui/button';
import { SettingsPopupMenu } from '../settingsPopupMenu/SettingsPopupMenu';
import { useTranslation } from '@/services/i18n/i18n.hooks';

export const Header = () => {
  const t = useTranslation();

  return (
    <div id="header" className="p-3 border-b flex justify-between">
      <div className="flex items-center gap-x-6 pl-3">
        <Button variant="link">
          <Link
            to="/market"
            className="flex items-center opacity-60 text-2xl font-bold transition-opacity ease-in-out hover:opacity-100"
            activeProps={{
              className: 'opacity-100'
            }}
          >
            {t('page.market.title')}
          </Link>
        </Button>
        <Button variant="link">
          <Link
            to="/admin"
            className="flex items-center opacity-60 text-2xl font-bold transition-opacity ease-in-out hover:opacity-100"
            activeProps={{
              className: 'opacity-100'
            }}
          >
            {t('page.admin.title')}
          </Link>
        </Button>
      </div>

      <SettingsPopupMenu />
    </div>
  );
};
