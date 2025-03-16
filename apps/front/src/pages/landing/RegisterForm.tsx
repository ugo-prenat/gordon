import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { RegistrationUser } from '@gordon/models';
import { buildDraftGuest } from './landing.utils';
import { isEmpty } from '@gordon/utils';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAuthRegistration } from '@/features/auth/auth.api';
import { toast } from 'sonner';
import { storeAccessToken } from '@/services/api/api.utils';

export const RegisterForm = () => {
  const t = useTranslation();
  const defaultDraftUser = buildDraftGuest();
  const {
    data,
    isError,
    isPending,
    isSuccess,
    mutate: register
  } = useAuthRegistration();

  const [draftUser, setDraftUser] = useState(defaultDraftUser);

  const handleClick = () => register(draftUser);

  const handleChange =
    (key: keyof RegistrationUser) => (e: ChangeEvent<HTMLInputElement>) =>
      setDraftUser({
        ...draftUser,
        [key]: isEmpty(e.target.value) ? defaultDraftUser[key] : e.target.value
      });

  useEffect(() => {
    if (isError) toast.error(t('register.submit.error'), {});
    if (isSuccess) {
      storeAccessToken(data.jwt);
      window.location.href = '/market'; // refresh page
    }
  }, [isError, isSuccess, data]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          {t('getStarted')}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>{t('register.dialog.title')}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Input
            disabled
            className="w-full"
            value={draftUser.name}
            placeholder={t('name')}
            onChange={handleChange('name')}
          />
          <Input
            disabled
            className="w-full"
            value={draftUser.id}
            placeholder={t('id')}
            onChange={handleChange('id')}
          />
        </div>
        <DialogFooter>
          <Button
            size="sm"
            variant="default"
            onClick={handleClick}
            isLoading={isPending}
            loadingLabel={t('register.submit.loading')}
          >
            {t('register.submit')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
