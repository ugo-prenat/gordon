import { Button } from '@/components/ui/button';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { useTradeUserDriverCard, useUserDriverCard } from '../cards.api';
import { useAuthStore } from '@/services/store/auth/auth.stores';
import { toast } from 'sonner';

export type TradeAction = 'buy' | 'sell';

interface ICardTradeBtnProps {
  cardId: string;
}

export const CardTradeBtn = ({ cardId }: ICardTradeBtnProps) => {
  const t = useTranslation();
  const { setUserCredits } = useAuthStore();

  const {
    error,
    isPending,
    refetch: refetchUserDriverCard
  } = useUserDriverCard(cardId);

  const action: TradeAction = error?.status === 404 ? 'buy' : 'sell';

  const { mutateAsync: tradeUserDriverCard, isPending: isTrading } =
    useTradeUserDriverCard(action, cardId);

  const handleClick = () =>
    tradeUserDriverCard()
      .then((updatedUser) => {
        setUserCredits(updatedUser.credits);
        refetchUserDriverCard();
      })
      .catch(() => toast.error(t(`trade.${action}.error`)));

  return (
    <Button
      variant="default"
      onClick={handleClick}
      className="px-4 py-2 font-bold"
      isLoading={isPending || isTrading}
    >
      {t(action)}
    </Button>
  );
};
