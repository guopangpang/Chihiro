// pages/myOrder/myOrder.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        order_list:[],
        service_list:[],
        isIncome:false,
        idLoading:false,
        show_shadow:false,
        dialog_olf_price:'',
        price_input_value:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        if(this.data.isIncome){
            this.updata_service_list();
        }else{
            this.updata_buy_list();
        }
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

    },
    updata_buy_list(){
        wx.showLoading({
            title: '加载中',
        });
        setTimeout(()=>{
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
                order_status:'1'
            };
            for(let i=0;i<6;i++){
                this.data.order_list.push(obj)
            }
            this.setData({
                order_list:this.data.order_list
            },function () {
                wx.hideLoading();
            })
        },2000);
    },
    updata_service_list(){
        wx.showLoading({
            title: '加载中',
        });
        setTimeout(()=>{
            let obj = {
                title:'这是标题',
                info:'这是详情这是详情这是详情这是详情这是详情这是详情这是详情这是详情这是详情这是详情这是详情这是详情',
                order_image:'../../image/image2.jpg',
                consule_fee:'1.50',
                consule_time:'2019-5-21 10:39:21',
                consule_status:'',
                service_fee:'180.00',
                service_time:'2019-11-21 10:39:21',
                service_status:'',
                person_name:'暗月',
                person_headerimg:'../../image/image2.jpg',
                order_status:'2'
            };
            for(let i=0;i<6;i++){
                this.data.service_list.push(obj)
            }
            this.setData({
                service_list:this.data.service_list
            })
        },2000);
    },
    buy(){
        if(this.data.isIncome){
            this.setData({
                isIncome:false
            },function () {
                if(this.data.order_list.length === 0){
                    this.updata_buy_list();
                }
            });
        }
    },
    income(){
        if(!this.data.isIncome){
            this.setData({
                isIncome:true
            },function () {
                if(this.data.service_list.length === 0){
                    this.updata_service_list();
                }
            })
        }
    },
    //显示修改价格弹出框
    change_shadow(data) {
        console.log(data)
        this.setData({
            dialog_olf_price:data.detail.item.service_fee
        })
        this.setData({
            show_shadow:true
        })
    },
    //获得修改价格input值
    price_input(e){
        this.setData({
            price_input_value:e.detail.value
        })
    },
    //修改价格弹出框确定按钮
    price_comfirm(){
        console.log(this.data.price_input_value);
        this.setData({
            show_shadow:false
        })
    },
    //修改价格弹出框取消
    price_cancel(){
        this.setData({
            show_shadow:false
        })
    },
});