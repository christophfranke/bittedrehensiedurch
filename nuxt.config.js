import routes from './util/routes.js'

export default {
  target: 'static',
  plugins: [{ src: 'plugins/client-only', ssr: false }],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
  generate: {
    routes() {
      return routes()
    }
  }
}