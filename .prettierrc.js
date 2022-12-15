module.exports = {
  semi: true,
  singleQuote: true,
  arrowParens: 'always',
  quoteProps: 'consistent',
  overrides: [
    {
      files: ['*.[s]css'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
