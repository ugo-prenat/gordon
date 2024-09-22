import { BookA } from 'lucide-react';
import { ReactNode } from 'react';
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from '@components/ui/dropdown-menu';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { useSettings } from '@/services/store/settings/settings.stores';
import { cn } from '@/utils/tailwind.utils';
import { Lang } from '@/services/store/settings/settings.models';

interface ILangSelect {
  label: string;
  value: Lang;
  icon: ReactNode;
  isActiveLang: boolean;
}

export const LangSelect = () => {
  const t = useTranslation();
  const { lang, setLang } = useSettings();

  const handleChange = (lang: Lang) => () => setLang(lang);

  const langs: ILangSelect[] = [
    {
      label: t('language.en'),
      value: 'en',
      icon: <span>🇺🇸</span>,
      isActiveLang: lang === 'en'
    },
    {
      label: t('language.fr'),
      value: 'fr',
      icon: <span>🇫🇷</span>,
      isActiveLang: lang === 'fr'
    }
  ];

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <div className="flex items-center gap-2 ">
          <BookA className="w-4 h-4" />
          {t('language')}
        </div>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {langs.map(({ value, label, icon, isActiveLang }) => (
            <DropdownMenuItem
              key={value}
              textValue={value}
              onClick={handleChange(value)}
              className={cn('gap-2', {
                'text-muted-foreground': !isActiveLang
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
