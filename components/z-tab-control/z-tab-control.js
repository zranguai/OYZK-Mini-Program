Component({
  data: {
    currentIndex: 0
  },
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  methods: {
    handleTab(event){
      // console.log(event);
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      });
      this.triggerEvent('handleTab',{index,titles:this.properties.titles[index]})
    },
  }
})