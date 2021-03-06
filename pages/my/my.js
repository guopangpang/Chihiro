//index.js
//获取应用实例
const app = getApp();

Page({
    data: {
        name:'我的',
        person: {
            headerImg:'',
            balance:'',
            grandTotal:''
        },
        projectList:[{
            name:'我的能力',
            left_img:'../../image/my_able.png',
            right_img:'../../image/back.png',
            url: '../../pages/myCapacity/myCapacity'
        },{
            name:'我的问题',
            left_img:'../../image/my_question.png',
            right_img: '../../image/back.png',
            url: '../../pages/myQuestion/myQuestion'
        },{
            name:'我的订单',
            left_img:'../../image/my_order.png',
            right_img:'../../image/back.png',
            url:'../../pages/myOrder/myOrder'
        },{
            name:'我的评论',
            left_img:'../../image/my_review.png',
            right_img:'../../image/back.png',
            url:'../../pages/reviewList/reviewList'
        },{
            name:'帮助中心',
            left_img:'../../image/help.png',
            right_img: '../../image/back.png',
            url: '../../pages/helpCenter/helpCenter'
        },{
            name:'关于我们',
            left_img:'../../image/aboutus.png',
            right_img: '../../image/back.png',
            url: '../../pages/aboutUs/aboutUs'
        }],
    },
    onLoad(){
        console.log('onLoad');
        this.setData({
            'person.name':'暗月',
            'person.headerImg':'../../image/image2.jpg',
            'person.balance':'25.00',
            'person.grandTotal':'1323.73',
        },function () {
            console.log('callback')
        });
        wx.setNavigationBarTitle({
            title:this.data.name
        })
    },
    onShow(){
        console.log('onShow')
    },
    onReady(){
        console.log('onReady')
    },
    onHide(){
        console.log('onHide')
    },
    goto_billing(){
        wx.navigateTo({
            url:"../../pages/billing_detail/billing_detail"
        })
    }
});
