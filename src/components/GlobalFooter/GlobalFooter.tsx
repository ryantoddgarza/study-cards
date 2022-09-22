import React from 'react';
import type { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const GlobalFooter: FC = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(graphql`
    query GlobalFooterQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const content = {
    copyright: `© ${new Date().getFullYear()} ${author}`,
  };

  return (
    <footer>
      <div>{content.copyright}</div>
    </footer>
  );
};

export default GlobalFooter;
