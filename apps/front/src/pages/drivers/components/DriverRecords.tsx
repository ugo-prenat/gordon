import { useDriverRecords } from '@/pages/drivers/drivers.api';

export const DriverRecords = ({ id }: { id: string }) => {
  const { data: records, isPending, isError, error } = useDriverRecords(id);

  if (isPending) return <div>Loading records...</div>;

  if (isError)
    return (
      <div>
        Error getting records: {error.message} code: {error.code}
      </div>
    );

  return <div>got {records.length} records</div>;
};
