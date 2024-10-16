import { buildImgUrl } from '@/utils/images.utils';
import { PropsWithChildren } from 'react';

interface IDriverHeroContainerProps extends PropsWithChildren {
  picturePath: string;
}

export const DriverHeroContainer = ({
  children,
  picturePath
}: IDriverHeroContainerProps) => {
  return (
    <div
      id="driver-hero-container"
      className="relative w-full h-[450px] flex justify-between border-b"
    >
      <DriverPictureBackground picturePath={picturePath}>
        <div className="h-full bg-gradient-to-t from-background via-transparent dark:via-60% via-40% lg:via-40% to-transparent">
          {children}
        </div>
      </DriverPictureBackground>
    </div>
  );
};

const DriverPictureBackground = ({
  children,
  picturePath
}: PropsWithChildren & { picturePath: string }) => {
  const pictureUrl = buildImgUrl(picturePath, 'c_fill,h_1000,ar_4:5');

  return (
    <div
      style={{ backgroundImage: `url(${pictureUrl})` }}
      className="backlight w-full h-full relative bg-no-repeat bg-right-top bg-[length:550px] overflow-hidden"
    >
      <style>
        {`
          .backlight:after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            background: inherit;
            opacity: 0.6;
            filter: blur(80px);
            z-index: -1;
          }
        `}
      </style>
      {children}
    </div>
  );
};
