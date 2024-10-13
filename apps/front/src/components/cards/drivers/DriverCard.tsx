import { FC } from 'react';
import { IMarketDriverCard } from '@gordon/models';
import { CardContainer } from '../CardContainer';
import { buildImgUrl } from '@/utils/images.utils';

interface IDriverCardProps {
  card: IMarketDriverCard;
  disableHover?: boolean;
}

export const DriverCard: FC<IDriverCardProps> = ({
  card,
  disableHover = false
}) => {
  const { driver, picturePath } = card;
  const { id: driverId } = driver;

  return (
    <>
      <CardContainer disableHover={disableHover}>
        <div className="">
          <img
            src={buildImgUrl(picturePath, `c_fill,w_500,ar_4:5`)}
            alt={`${driverId}-picture`}
          />
        </div>
      </CardContainer>
    </>
  );
};
