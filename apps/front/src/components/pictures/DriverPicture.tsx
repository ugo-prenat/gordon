import { useEffect, useState } from 'react';
import { CallStatus } from '@gordon/models';
import { loadPicture } from '@/utils/images.utils';
import { cn } from '@/utils/tailwind.utils';

interface IDriverPictureProps {
  id: string;
  pictureUrl: string;
}

export const DriverPicture = ({ id, pictureUrl }: IDriverPictureProps) => {
  const [status, setStatus] = useState<CallStatus>('idle');

  const handleLoad = () => {
    setStatus('pending');
    loadPicture(pictureUrl)
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'));
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const DriverPlaceholder = () => {
    return (
      <img
        alt="driver-placeholder"
        src="../../../public/assets/driver-placeholder.png"
        className={cn({ 'animate-breath duration-4000': status === 'pending' })}
      />
    );
  };

  return status === 'success' ? (
    <img src={pictureUrl} alt={`${id}-picture`} />
  ) : (
    <DriverPlaceholder />
  );
};
