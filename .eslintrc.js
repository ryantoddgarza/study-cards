module.exports = {
  extends: ['@bitpas/eslint-config'],
  overrides: [
    {
      files: ['gatsby-node.ts'],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
