// pages/myOrder/myOrder.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        order_list:[],
        isIncome:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        this.updata_buy_list();
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
    scroll(){
      console.log(33)
    },
    updata_buy_list(){
        console.log(444)
        let obj = {
            title:'这是标题',
            info:'这是详情这是详情这是详情这是详情这是详情这是详情这是详情这是详情这是详情这是详情这是详情这是详情',
            order_image:'../../image/image.jpg',
            consule_fee:'1.50',
            consule_time:'2019-5-21 10:39:21',
            consule_status:'',
            service_fee:'180.00',
            service_time:'2019-11-21 10:39:21',
            service_status:'',
            person_name:'暗月',
            person_headerimg:'../../image/image.jpg',
            order_status:''
        };
        for(let i=0;i<6;i++){
            this.data.order_list.push(obj)
        }
        this.setData({
            order_list:this.data.order_list
        })
    },
    buy(){
        if(this.data.isIncome){
            this.setData({
                isIncome:false
            })
        }
    },
    income(){
        if(!this.data.isIncome){
            this.setData({
                isIncome:true
            })
        }
    }
});