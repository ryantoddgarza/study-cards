import React from 'react';
import type { FC } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Deck from '../components/Deck';
import type { DeckData } from '../data/types';

export interface DeckTemplateProps {
  data: {
    deck: DeckData;
  };
}

const DeckTemplate: FC<DeckTemplateProps> = ({ data }) => {
  return (
    <Layout>
      <Deck data={data} />
    </Layout>
  );
};

export default DeckTemplate;

export const pageQuery = graphql`
  query DeckId($id: String!) {
    deck: decksJson(id: { eq: $id }) {
      name
      problems {
        a
        q
      }
    }
  }
`;
