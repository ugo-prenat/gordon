import { ImgHTMLAttributes } from 'react';
import { IMAGES_CDN_URL } from '@gordon/models';

interface IDriverCardImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export const DriverCardImage = ({ src, ...props }: IDriverCardImageProps) => {
  return (
    <img
      loading="lazy"
      src={buildUrl(src)}
      srcSet={`
      ${buildUrl(src, 400)} 400w,
      ${buildUrl(src, 800)} 800w,
      ${buildUrl(src, 1200)} 1200w,
      ${buildUrl(src, 1600)} 1600w,
      ${buildUrl(src, 2000)} 2000w
      `}
      {...props}
    />
  );
};

const buildUrl = (url: string, width?: number) => {
  const defaultParams = 'f_auto,q_auto';
  const resize = width
    ? `c_fill,w_${width},ar_4:5,${defaultParams}`
    : defaultParams;
  return `${IMAGES_CDN_URL}/${resize}${url}`;
};
