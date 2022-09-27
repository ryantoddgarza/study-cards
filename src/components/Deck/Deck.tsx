import React, { useState } from 'react';
import type { FC } from 'react';
import { BlockMath } from 'react-katex';
import type { DeckProps } from './types';

const Deck: FC<DeckProps> = ({ data }) => {
  const {
    deck: { name, cards },
  } = data;

  const [flip, setFlip] = useState(false);
  const [index, setIndex] = useState(0);
  const hasPrev = index !== 0;
  const hasNext = index !== cards.length - 1;
  const { question, answer } = cards[index];

  const flipCard = () => {
    setFlip(!flip);
  };

  const prevCard = () => {
    if (hasPrev) {
      setIndex(index - 1);
      setFlip(false);
    }
  };

  const nextCard = () => {
    if (hasNext) {
      setIndex(index + 1);
      setFlip(false);
    }
  };

  return (
    <div className="deck">
      <h1>{name}</h1>
      <div className="card">
        <div className="header">
          <div className="side-indicator">{flip ? 'Answer' : 'Question'}</div>
        </div>
        <div className="body">
          {(question.text || answer.text) && (
            <p>{flip ? answer.text : question.text}</p>
          )}
          {(question.math || answer.math) && (
            <BlockMath math={flip ? answer.math : question.math} />
          )}
        </div>
      </div>
      <div className="controls">
        <div className="button-group">
          <button className="item" onClick={flipCard}>
            Flip
          </button>
        </div>
        <div className="button-group">
          <button className="item" disabled={!hasPrev} onClick={prevCard}>
            Back
          </button>
          <button className="item" disabled={!hasNext} onClick={nextCard}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deck;
