import { ImgHTMLAttributes } from 'react';
import { IMAGES_CDN_URL } from '@gordon/models';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export const Image = ({ src, ...props }: ImageProps) => {
  const srcSet = [400, 800, 1200, 1600, 2000].map(
    (width) => `${buildUrl(src, width)} ${width}w`
  );

  return (
    <img
      {...props}
      loading="lazy"
      src={buildUrl(src)}
      srcSet={srcSet.join(', ')}
    />
  );
};

const buildUrl = (url: string, width?: number) => {
  const defaultParams = 'f_auto,q_auto';
  const resize = width ? `c_fill,w_${width},${defaultParams}` : defaultParams;
  return `${IMAGES_CDN_URL}/${resize}${url}`;
};
