import { useEffect, useState } from 'react';
import { CallStatus } from '@gordon/models';
import { loadPicture } from '@/utils/images.utils';
import { cn } from '@/utils/tailwind.utils';

interface IChassisPictureProps {
  id: string;
  pictureUrl: string;
  placeholder?: boolean;
}

export const ChassisPicture = ({
  id,
  pictureUrl,
  placeholder = false
}: IChassisPictureProps) => {
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

  const ChassisPlaceholder = () => (
    <img
      alt="chassis-placeholder"
      src="/assets/chassis-placeholder.png"
      className={cn('opacity-20', {
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
    <ChassisPlaceholder />
  );
};
