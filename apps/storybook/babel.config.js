module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'cjs',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: ['babel-plugin-styled-components'],
};
