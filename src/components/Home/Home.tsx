import React from 'react';
import type { FC } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import type { DeckData } from '../../data/types';

const Home: FC = () => {
  const {
    allDecksJson: { decks },
  } = useStaticQuery(graphql`
    query HomeQuery {
      allDecksJson(sort: { fields: name, order: DESC }) {
        decks: nodes {
          name
          slug
        }
      }
    }
  `);

  return (
    <div>
      <h1>Study Cards</h1>
      {decks && (
        <div>
          <h2>Decks</h2>
          <ul>
            {decks.map(({ name, slug }: DeckData) => (
              <li key={slug}>
                <Link to={`/${slug}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
