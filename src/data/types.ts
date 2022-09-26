export interface Problem {
  question: {
    math?: string;
  };
  answer: {
    math?: string;
  };
}

export interface DeckData {
  name: string;
  slug: string;
  problems: Problem[];
}
