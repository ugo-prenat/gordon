import { Link } from '@tanstack/react-router';
import { Button } from '../ui/button';
import { SettingsPopupMenu } from '../settingsPopupMenu/SettingsPopupMenu';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { Price } from '../Price';
import { useAuthStore } from '@/services/store/auth/auth.stores';

export const Header = () => {
  const t = useTranslation();
  const { user } = useAuthStore();

  const isUserAdmin = user.role === 'admin';

  return (
    <div id="header" className="p-3 border-b flex justify-between">
      <div className="flex items-center gap-x-6 pl-3">
        <Button variant="link">
          <Link
            to="/market"
            className="flex items-center opacity-60 text-2xl font-bold transition-opacity ease-in-out hover:opacity-100"
            activeProps={{
              className: '!opacity-100'
            }}
          >
            {t('market')}
          </Link>
        </Button>
        {isUserAdmin && (
          <Button variant="link">
            <Link
              to="/admin"
              className="flex items-center opacity-60 text-2xl font-bold transition-opacity ease-in-out hover:opacity-100"
              activeProps={{
                className: '!opacity-100'
              }}
            >
              {t('admin')}
            </Link>
          </Button>
        )}
      </div>

      <div className="flex items-center gap-x-6">
        <Price value={user.credits} percentage={0} />
        <SettingsPopupMenu />
      </div>
    </div>
  );
};
