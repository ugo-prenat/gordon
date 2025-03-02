import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/services/i18n/i18n.hooks';

export const ValueTrendBadge = ({ trend }: { trend: number }) => {
  const t = useTranslation();
  return <Badge variant="outline">{t(`records.trend.${trend}`)}</Badge>;
};
