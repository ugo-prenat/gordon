import { useEffect, useState } from 'react';
import { CallStatus } from '@gordon/models';
import { loadPicture } from '@/utils/images.utils';

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

  if (status === 'error') return <p>toast</p>;

  if (status === 'success') {
    return <img src={pictureUrl} alt={`${id}-picture`} />;
  }

  return <DriverPlaceholder />;
};

const DriverPlaceholder = () => {
  return <div>DriverPlaceholder</div>;
};
