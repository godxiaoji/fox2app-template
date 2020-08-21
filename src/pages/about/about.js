export default {
  data() {
    return {}
  },
  computed: {},
  created() {
    console.log('about created')
  },
  beforeDestroy() {
    console.log('about destroyed')
  },
  mounted() {},
  onShow() {
    console.log('about show')
  },
  onHide() {
    console.log('about hide')
  },
  methods: {
    back() {
      fx.switchTab({
        url: 'pages/index/index'
      })
    }
  }
}
