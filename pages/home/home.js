// pages/home/home.js
import city from '../../utils/city.js';



Page({

  /**
   * 页面的初始数据
   */
  data: {
    userPlace: '',
    regionShow: false,
    citys: city
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

  },


  /**
   * 点击打开region-picker
   * @param {*} e 
   */
  clickOpenRegionpicker: function (e) {
    this.setData({
      regionShow: true
    });
  },
  /**
  * region显示隐藏事件
  */
  regionShowChange: function (e) {
    let show = e.detail.show;
    this.setData({
      regionShow: show
    });
  },

  /**
   * 当点击确定时的回调
   * @param {*} e 
   */
  onRegionConfirm: function (e) {
    console.log(e)
    let selectArray = e.detail.select;
    let list = [];
    for (let i = 0; i < selectArray.length; i++) {
      list.push(selectArray[i].name)
    }
    this.setData({
      userPlace:list.join('-')
    });

  }
})