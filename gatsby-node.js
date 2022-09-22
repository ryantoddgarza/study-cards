const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const { data, errors } = await graphql(`
    {
      allDecksJson {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(errors);
    return;
  }

  const { allDecksJson } = data;

  const templates = {
    deck: path.resolve('./src/templates/Deck.tsx'),
  };

  allDecksJson.edges.forEach(({ node: { id, slug } }) => {
    createPage({
      path: `/${slug}`,
      component: templates.deck,
      context: { id },
    });
  });
};
