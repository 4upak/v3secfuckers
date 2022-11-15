module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/app/'
    : '/',
  devServer: {
    port:3001,
  }
}
