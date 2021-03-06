var vm = new Vue({
  el: '#app',
  data: {
      message: 'Hello'
  },
  computed: {
      // a computed getter
      reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
      }
  }
})