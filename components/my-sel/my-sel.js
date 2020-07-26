Component({
  data: {
    counter: 0
  },
  properties: {},
  methods: {
    incrementCounter(num){
      this.setData({
        counter: this.data.counter + num
      })
    }
  }
})