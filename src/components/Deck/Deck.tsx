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
  const { question } = problems[index];
  const { answer } = problems[index];

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
        <div className="item">
          <div className="button-group">
            <button className="item" onClick={flipCard}>
              Flip
            </button>
            {hasNext && (
              <button className="item" onClick={nextCard}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deck;
