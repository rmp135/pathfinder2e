const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/pathfinder2e/'
  }
} : {}

export default {
  plugins: [
  ],
  css: [
    "~/style/style.css"
  ],
  loading: true,
  generate: {
    dir: 'docs'
  },
  ...routerBase
}