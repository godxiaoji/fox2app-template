export default {
  globalData: {
    title: 'hello world'
  },
  onLaunch(object) {
    console.log('app onLaunch', this, object)
  },
  onShow() {
    console.log('app onShow')
  },
  onHide() {
    console.log('app onHide')
  }
}
