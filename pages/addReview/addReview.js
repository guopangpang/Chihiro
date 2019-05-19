// pages/addReview/addReview.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        order_info:{},
        star_list:[],
        review:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let obj = {
            title:'北京大学自动化学院',
            img:'../../image/image4.jpg',
            handle:'1.00',
            actuallyPay:'1.00',
            order_id:'201905100001',
            buyer:'暗月',
            seller:'暗月'
        };
        this.setData({
            order_info:obj
        });
        this.changeStar(1)
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
        console.log(this.data.star_list)
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
    changeStar(flag){
        let star_orange = '../../image/star_orange.png',
            star_gray = '../../image/star_grey.png',
            array = [];
        for(let i = 0;i<5;i++) {
            if(i<flag){
                array.push(star_orange)
            }else{
                array.push(star_gray)
            }
        }
        this.setData({
            star_list:array
        })
    },
    changeStar_bind(e){
        let num = parseInt(e.currentTarget.id) + 1;
        this.changeStar(num)
    }
});