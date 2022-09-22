import React, { useState } from 'react';
import type { FC } from 'react';
import { BlockMath } from 'react-katex';
import type { DeckProps } from './types';

const Deck: FC<DeckProps> = ({ data }) => {
  const {
    deck: { name, problems },
  } = data;

  const [flip, setFlip] = useState(false);
  const [index, setIndex] = useState(0);
  const hasNext = index !== problems.length - 1;
  const question = problems[index].q;
  const answer = problems[index].a;

  const flipCard = () => {
    setFlip(!flip);
  };

  const nextCard = () => {
    if (hasNext) {
      setIndex(index + 1);
      setFlip(false);
    }
  };

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <BlockMath math={flip ? answer : question} />
        <button onClick={flipCard}>Flip</button>
        {hasNext && <button onClick={nextCard}>Next</button>}
      </div>
    </div>
  );
};

export default Deck;
