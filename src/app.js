export default {
  globalData: {
    num: 1
  },
  onLaunch(object) {
    console.log('app onLaunch', this, object)
  },
  onShow() {
    console.log('app onShow', this)
  },
  onHide() {
    console.log('app onHide')
  }
}
