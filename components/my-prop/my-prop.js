Component({
  data: {},
  properties: {
    title: String,
    content: String
  },
  externalClasses: ['tit'],
  
  methods: {
    handleIncrease(){
      // console.log('------');
      this.triggerEvent('handleIncrease')
    }
  }
})