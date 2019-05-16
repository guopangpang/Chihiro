Page({
    data:{
        name:'订单',
        order_info:{},
        isShow:true
    },
    onLoad(){
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
        })
    },
    updataOrder(){
        wx.reLaunch({
            url:'../../pages/home/home?isShow='+ this.data.isShow + '&age=22'
        })
    }
});