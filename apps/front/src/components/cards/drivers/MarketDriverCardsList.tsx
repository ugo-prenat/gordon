import { CardsListContainer } from '../CardsListContainer';
import { IMarketDriverCard } from '@gordon/models';
import { MarketDriverCard } from './MarketDriverCard';

interface IMarketDriverCardsListProps {
  cards: IMarketDriverCard[];
}

export const MarketDriverCardsList = ({
  cards
}: IMarketDriverCardsListProps) => {
  return (
    <CardsListContainer>
      {cards.map((card) => (
        <MarketDriverCard key={card.id} card={card} />
      ))}
    </CardsListContainer>
  );
};
