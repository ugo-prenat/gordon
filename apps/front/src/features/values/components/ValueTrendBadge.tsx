import { Badge } from '@/components/ui/badge';

export const ValueTrendBadge = ({ trend }: { trend: number }) => {
  return <Badge variant="outline">{trend}</Badge>;
  // return <Badge variant="outline">{t(`records.trend.${trend}`)}</Badge>;
};
