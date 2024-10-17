import { IMAGES_CDN_URL } from '@gordon/models';

export const buildPictureUrl = (path: string, params: string) =>
  `${IMAGES_CDN_URL}/f_auto,q_auto,${params}${path}`;

export const loadPicture = (src: string) =>
  new Promise((resolve, reject) => {
    const picture = new Image();
    picture.onload = () => resolve('loaded');
    picture.onerror = () => reject(new Error('Failed to load image'));
    picture.src = src;
  });
