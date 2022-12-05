module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
    require('postcss-preset-env')({
      browsers: ['last 2 versions'],
    }),
  ],
};
