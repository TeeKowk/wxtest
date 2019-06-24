//define.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    room_info: [
      {
        room_id: "1",
        room_name: "101房",
        in_day: "2008-01-26",
        room_rent: "100",
        volt_rate: 3.3,
        water_rate: 3
      },
      {
        room_id: "2",
        room_name: "102房",
        in_day: "2008-01-21",
        room_rent: "1000",
        volt_rate: 1.3,
        water_rate: 3
      }
    ]       
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var that = this;
    wx.request({
      url: 'https://teekowk.xicp.cn/json.php',//此处填写你后台请求地址
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      data: {},
      success: function (res) {
        // success
        console.log(res.data);//打印请求返回的结果
                that.setData({ 
                  room_info: res.data
         }),
        
        console.log(room_info);

      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
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
      //console.log('define.js onshow')
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
      console.log('--define.js--downrefresh--')
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
  formSubmit: function (e) { 
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () { 
    console.log('form发生了reset事件') 
  },

  onButtonClick:function(){
    consloe.log('button click down')
  }
})