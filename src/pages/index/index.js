const app = getApp()

export default {
  name: 'App',
  components: {},
  data() {
    return { number: 0, info: { num: app.globalData.num }, arr: [1, 2] }
  },
  computed: {
    plus() {
      return this.number + 1
    }
  },
  created() {
    console.log(app)
    console.log('index created', getCurrentPages())
  },
  mounted() {
    console.log('index mounted')
    console.log(fx.getSystemInfoSync())

    this.io = this.createIntersectionObserver({})
      .relativeToViewport({})
      .observe('#number', res => {
        console.log(res)
      })
  },
  onShow() {
    console.log('index show')
  },
  onHide() {
    console.log('index hide')
  },
  methods: {
    add() {
      this.setData({
        number: this.data.number + 1,
        'info.num': this.data.info.num + 2
      })
      console.log(this.data)
    },
    showPlus() {
      fx.navigateTo({
        url: 'pages/info/info?id=1'
      })

      // this.createSelectorQuery()
      //   .selectViewport()
      //   .scrollOffset(function(res) {
      //     console.log(res)
      //   })
      //   .selectAll('li')
      //   .boundingClientRect()
      //   .select('li')
      //   .boundingClientRect()
      //   .exec(function(res) {
      //     console.log(res)
      //   })

      // this.io.disconnect()
    },
    toAbout() {
      fx.switchTab({
        url: 'pages/about/about'
      })
    },
    onClick(e) {
      console.log(e)
    }
  }
}
