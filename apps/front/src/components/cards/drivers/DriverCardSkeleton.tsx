import { DriverPicture } from '@/components/pictures/DriverPicture';
import { CardContainer } from '../CardContainer';

export const DriverCardSkeleton = () => (
  <CardContainer disableHover>
    <DriverPicture id="placeholder" pictureUrl="" placeholder />
  </CardContainer>
);
