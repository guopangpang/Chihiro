// pages/helpCenter/helpCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionList: [
        { id: '1', title: '1. 如何创建能力', answer: '答案答案呢', show: false },
        { id: '2', title: '2. 如何创建能力', answer: '答案答案呢', show: false },
        { id: '3', title: '3. 如何创建能力', answer: '答案答案呢', show: false },
        { id: '4', title: '4. 如何创建能力', answer: '答案答案呢', show: false },
        { id: '5', title: '5. 如何创建能力', answer: '答案答案呢', show: false }
    ]
  },

  // 点击显示答案
  showContent(e) {
    const id = e.currentTarget.id
    const list = this.data.questionList
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].show = !list[i].show 
      } else { 
        list[i].show = false
      } 
    }
    /**     * key和value名称一样时，可以省略     *      * list:list=>list     */    
    this.setData({
       questionList: list 
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})