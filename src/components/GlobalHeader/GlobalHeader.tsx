import React from 'react';
import type { FC } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { HOME_PATH } from '../../constants';

const GlobalHeader: FC = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query GlobalHeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <div>
        <a href="https://ryantoddgarza.com">ryantoddgarza</a>
        <span> | </span>
        <Link to={HOME_PATH}>{title}</Link>
      </div>
    </header>
  );
};

export default GlobalHeader;
