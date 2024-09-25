import { useDriverRecords } from '../drivers.api';

export const DriverRecordsTab = ({ id }: { id: string }) => {
  const { data: records, isLoading, isError, error } = useDriverRecords(id);
  console.log('RecordsTab rendered');

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: {error.message} code: {error.code}
      </div>
    );
  return (
    <div>
      DriverRecordsTab
      <p>found {records?.length ?? 0} records</p>
    </div>
  );
};
