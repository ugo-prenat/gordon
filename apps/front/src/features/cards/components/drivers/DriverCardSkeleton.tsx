import { DriverPicture } from '@/components/pictures/DriverPicture';
import { CardContainer } from '../CardContainer';

export const DriverCardSkeleton = () => (
  <CardContainer resource="driver" disableHover>
    <DriverPicture id="placeholder" pictureUrl="" placeholder />
  </CardContainer>
);
