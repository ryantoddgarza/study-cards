export interface Card {
  question: {
    text?: string;
    math?: string;
  };
  answer: {
    text?: string;
    math?: string;
  };
}

export interface DeckData {
  name: string;
  slug: string;
  cards: Card[];
}
