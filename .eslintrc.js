module.exports = {
  extends: ['@bitpas'],
  overrides: [
    {
      files: ['gatsby-node.ts'],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
