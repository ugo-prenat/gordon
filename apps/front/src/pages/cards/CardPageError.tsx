import { Alert } from '@/components/Alert';
import { CardContainer } from '@/features/cards/components/CardContainer';
import { Page } from '@/components/nav/Page';
import { DriverPicture } from '@/components/pictures/DriverPicture';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { IAPIError } from '@gordon/models';
import { Link } from '@tanstack/react-router';
import { FC } from 'react';

interface ICardPageErrorProps {
  error: IAPIError;
  onRefresh: () => void;
}

export const CardPageError: FC<ICardPageErrorProps> = ({
  error,
  onRefresh
}) => {
  const t = useTranslation();

  return (
    <Page padding>
      <div className="h-full flex justify-center items-center">
        <div className="w-1/2 flex justify-center">
          <div className="w-full sm:mr-6 md:w-4/5 lg:w-2/3 xl:w-1/2">
            <CardContainer resource="driver" disableHover>
              <DriverPicture id="placeholder" pictureUrl="" />
            </CardContainer>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center gap-4">
          <Alert
            error={error}
            severity="error"
            action={onRefresh}
            text={`${t(`page.card.retrieve.${error.status === 404 ? 'notFound' : 'error'}`)}`}
          />
          <div className="flex gap-4">
            <Button variant="outline" className="px-3 py-2">
              <Link to="/market">{t('back.to.market')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
};
