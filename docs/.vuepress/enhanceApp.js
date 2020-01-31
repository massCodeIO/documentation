import VueAnalytics from 'vue-analytics'


export default ({ Vue, router }) => {
  Vue.use(VueAnalytics, {
    id: 'UA-56182454-12',
    router,
    debug: {
      enabled: false,
      sendHitTask: process.env.NODE_ENV === 'production'
    }
  })
}
