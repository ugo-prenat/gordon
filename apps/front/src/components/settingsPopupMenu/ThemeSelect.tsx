import { Monitor, Moon, Sun, SunMoon } from 'lucide-react';
import { ReactNode } from 'react';
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from '@/components/ui/dropdown-menu';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { Theme } from '@/services/store/settings/settings.models';
import { useSettings } from '@/services/store/settings/settings.stores';
import { cn } from '@/utils/tailwind.utils';

interface IThemeSelect {
  label: string;
  value: Theme;
  icon: ReactNode;
  isActiveTheme: boolean;
}

export const ThemeSelect = () => {
  const t = useTranslation();
  const { theme, setTheme } = useSettings();

  const handleChange = (theme: Theme) => () => setTheme(theme);

  const themes: IThemeSelect[] = [
    {
      label: t('theme.light'),
      value: 'light',
      icon: <Sun className="w-4 h-4" />,
      isActiveTheme: theme === 'light'
    },
    {
      label: t('theme.dark'),
      value: 'dark',
      icon: <Moon className="w-4 h-4" />,
      isActiveTheme: theme === 'dark'
    },
    {
      label: t('theme.system'),
      value: 'system',
      icon: <Monitor className="w-4 h-4" />,
      isActiveTheme: theme === 'system'
    }
  ];

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <div className="flex items-center gap-2 ">
          <SunMoon className="w-4 h-4" />
          {t('theme')}
        </div>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {themes.map(({ value, label, icon, isActiveTheme }) => (
            <DropdownMenuItem
              key={value}
              textValue={value}
              onClick={handleChange(value)}
              className={cn('gap-2', {
                'text-muted-foreground': !isActiveTheme
              })}
            >
              {icon}
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};
