import { useEffect, useState } from 'react';
import { CallStatus } from '@gordon/models';
import { loadPicture } from '@/utils/images.utils';
import { cn } from '@/utils/tailwind.utils';

interface IDriverPictureProps {
  id: string;
  pictureUrl: string;
  placeholder?: boolean;
}

export const DriverPicture = ({
  id,
  pictureUrl,
  placeholder = false
}: IDriverPictureProps) => {
  const [status, setStatus] = useState<CallStatus>('idle');

  const handleLoad = () => {
    setStatus('pending');
    loadPicture(pictureUrl)
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'));
  };

  useEffect(() => {
    if (!placeholder) handleLoad();
  }, []);

  const DriverPlaceholder = () => (
    <img
      alt="driver-placeholder"
      src="/assets/driver-placeholder.png"
      className={cn('opacity-10', {
        'animate-breath duration-4000': status === 'pending' || placeholder
      })}
    />
  );

  return status === 'success' ? (
    <img
      src={pictureUrl}
      alt={`${id}-picture`}
      className="animate-fade-in duration-300"
    />
  ) : (
    <DriverPlaceholder />
  );
};
