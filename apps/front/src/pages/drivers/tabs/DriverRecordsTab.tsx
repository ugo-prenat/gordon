import { driverRoute } from '@/services/router/router.routes';
import { useDriverRecords } from '../drivers.api';

export const DriverRecordsTab = () => {
  const { id } = driverRoute.useParams();

  const { data: records, isPending, isError, error } = useDriverRecords(id);
  console.log('RecordsTab rendered');

  if (isPending) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: {error.message} code: {error.code}
      </div>
    );
  return (
    <div>
      DriverRecordsTab
      <p>found {records.length} records</p>
    </div>
  );
};
