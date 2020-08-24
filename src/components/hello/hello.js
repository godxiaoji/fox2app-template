export default {
  props: {
    title: String
  },
  data() {
    return {}
  },
  created() {
    console.log('hello created')
  },
  mounted() { },
  pageLifetimes: {
    show() {
      console.log('hello show')
    },
    hide() {
      console.log('hello hide')
    }
  },
  methods: {
  }
}
