import { buildImgUrl } from '@/utils/images.utils';
import { PropsWithChildren } from 'react';

interface IDriverHeroContainerProps extends PropsWithChildren {
  picturePath: string;
}

export const DriverHeroContainer = ({
  children,
  picturePath
}: IDriverHeroContainerProps) => {
  const pictureUrl = buildImgUrl(picturePath, 'c_fill,h_700,ar_4:5');

  return (
    <div
      id="driver-hero-container"
      className={`w-full h-[450px] flex justify-between border-b`}
      // after:absolute after:top-0 after:w-full after:h-full after:bg-inherit after:blur-md
      // className={`relative h-[450px] flex justify-between border-b after:absolute after:top-0 after:w-full after:h-full after:bg-inherit after:blur-md`}
    >
      <div
        className="w-full h-full bg-right-top bg-no-repeat"
        style={{
          backgroundImage: `url(${pictureUrl})`
        }}
      >
        <div className="h-full bg-gradient-to-t from-background via-transparent via-60% lg:via-40% to-transparent">
          {children}
        </div>
      </div>
    </div>
  );
};
