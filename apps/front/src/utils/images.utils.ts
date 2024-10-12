import { IMAGES_CDN_URL } from '@gordon/models';

export const buildImgUrl = (path: string, params: string) =>
  `${IMAGES_CDN_URL}/f_auto,q_auto,${params}${path}`;
