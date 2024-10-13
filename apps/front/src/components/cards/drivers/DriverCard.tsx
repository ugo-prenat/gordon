import { IMarketDriverCard } from '@gordon/models';
import { FC } from 'react';
import { Prout } from '../prout';

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
  // const { id: teamId, name: teamName } = team;

  return <Prout />;
  // return (
  //   <CardContainer disableHover={disableHover}>
  //     <img
  //       src={buildImgUrl(picturePath, `c_fill,w_500,ar_4:5`)}
  //       alt={`${driverId}-picture`}
  //       className="w-full h-auto"
  //     />
  //   </CardContainer>
  // );
};
