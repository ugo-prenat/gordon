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
  const [showPlaceholder, setShowPlaceholder] = useState(placeholder);

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

  if (!showPlaceholder && status === 'pending') {
    setTimeout(() => {
      setShowPlaceholder(true);
    }, 1000);

    return null;
  }

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
