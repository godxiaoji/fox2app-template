const app = getApp()

export default {
  data() {
    return { title: app.globalData.title }
  },
  computed: {
  },
  created() {
    console.log(app)
    console.log('index created', getCurrentPages())
  },
  mounted() {
  },
  onShow() {
    console.log('index show')
  },
  onHide() {
    console.log('index hide')
  },
  methods: {
    toAbout() {
      fx.navigateTo({
        url: 'pages/about/about'
      })
    }
  }
}
