import { Button } from '@/components/ui/button';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { useTradeUserCard, useUserPossessCard } from '../cards.api';
import { useAuthStore } from '@/services/store/auth/auth.stores';
import { toast } from 'sonner';
import { Tooltip } from '@/components/Tooltip';
import { Resource } from '@gordon/models';

export type TradeAction = 'buy' | 'sell';

interface ICardTradeBtnProps {
  cardId: string;
  cardValue: number;
  resource: Resource;
}

export const CardTradeBtn = ({
  cardId,
  cardValue,
  resource
}: ICardTradeBtnProps) => {
  const t = useTranslation();
  const { setUserCredits, user } = useAuthStore();

  const {
    error,
    isPending,
    refetch: refetchUserCard
  } = useUserPossessCard(cardId, resource);

  const action: TradeAction = error?.status === 404 ? 'buy' : 'sell';

  const canBuyTheCard = action === 'buy' ? cardValue <= user?.credits : true;
  const title = !canBuyTheCard ? t('trade.notEnoughCredits') : undefined;

  const { mutateAsync: tradeUserCard, isPending: isTrading } = useTradeUserCard(
    action,
    cardId,
    resource
  );

  const handleClick = () =>
    tradeUserCard()
      .then((updatedUser) => {
        setUserCredits(updatedUser.credits);
        refetchUserCard();
      })
      .catch(() => toast.error(t(`trade.${action}.error`)));

  return (
    <Tooltip title={title}>
      <Button
        variant="default"
        onClick={handleClick}
        disabled={!canBuyTheCard}
        className="px-4 py-2 font-bold"
        isLoading={isPending || isTrading}
      >
        {t(action)}
      </Button>
    </Tooltip>
  );
};
