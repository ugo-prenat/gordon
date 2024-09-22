import { Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { ThemeSelect } from './ThemeSelect';
import { LangSelect } from './LangSelect';

export const SettingsPopupMenu = () => {
  const t = useTranslation();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Settings2 className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>{t('settings')}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <ThemeSelect />
          <LangSelect />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
