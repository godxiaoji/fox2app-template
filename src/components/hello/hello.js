export default {
  props: {
    number: Number,
    info: Object
  },
  components: {},
  data() {
    return { title: 'hello' }
  },
  created() {
    console.log('hello created')
  },
  mounted() {},
  pageLifetimes: {
    show() {
      console.log('hello show')
    },
    hide() {
      console.log('hello hide')
    }
  },
  methods: {
    test() {
      console.log(this)
    }
  }
}
