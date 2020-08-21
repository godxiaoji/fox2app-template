export default {
  name: 'App',
  components: {},
  data() {
    return { number: 0, info: { num: 1 } }
  },
  computed: {
    plus() {
      return this.number + 1
    }
  },
  created(query) {
    console.log('info', query)
  },
  beforeDestroy() {
    console.log('destroyed')
  },
  mounted() { },
  methods: {
    back() {
      fx.navigateBack()
    },
    reLaunch() {
      fx.reLaunch({
        url: 'pages/about/about'
      })
    }
  }
}
