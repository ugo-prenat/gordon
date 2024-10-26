import { driverRoute } from '@/services/router/router.routes';
import { useDriverRecords } from '@/features/records/records.api';
import { DriverRecordsList } from './DriverRecordsList';

export const DriverRecordsTab = () => {
  const { id } = driverRoute.useParams();

  const { data: records, isPending, isError, error } = useDriverRecords(id);

  if (isPending) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: {error.message} code: {error.code}
      </div>
    );
  return <DriverRecordsList records={records} />;
};
