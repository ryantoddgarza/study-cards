export interface ProblemData {
  q: string;
  a: string;
}

export interface DeckData {
  name: string;
  slug: string;
  problems: ProblemData[];
}
