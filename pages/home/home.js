//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        name:'找人',
        search_list:[{
            title:'清华自动化机电学系',
            info:'这里的专业为何数一数二，与北大的自动化有什么区别，听听师兄给你耐心解答',
            name:'暗*月',
            time:'2019年3月24',
            good_present:'95%',
            pay_person:'233',
            header_img:'../../image/image.jpg',
            img:'../../image/image.jpg'
        },{
            title:'清华自动化机电学系',
            info:'这里的专业为何数一数二，与北大的自动化有什么区别，听听师兄给你耐心解答',
            name:'暗*月',
            time:'2019年3月24',
            good_present:'95%',
            pay_person:'233',
            header_img:'../../image/image.jpg',
            img:'../../image/image.jpg'
        },{
            title:'清华自动化机电学系',
            info:'这里的专业为何数一数二，与北大的自动化有什么区别，听听师兄给你耐心解答',
            name:'暗*月',
            time:'2019年3月24',
            good_present:'95%',
            pay_person:'233',
            header_img:'../../image/image.jpg',
            img:'../../image/image.jpg'
        },{
            title:'清华自动化机电学系',
            info:'这里的专业为何数一数二，与北大的自动化有什么区别，听听师兄给你耐心解答',
            name:'暗*月',
            time:'2019年3月24',
            good_present:'95%',
            pay_person:'233',
            header_img:'../../image/image.jpg',
            img:'../../image/image.jpg'
        },{
            title:'清华自动化机电学系',
            info:'这里的专业为何数一数二，与北大的自动化有什么区别，听听师兄给你耐心解答',
            name:'暗*月',
            time:'2019年3月24',
            good_present:'95%',
            pay_person:'233',
            header_img:'../../image/image.jpg',
            img:'../../image/image.jpg'
        },{
            title:'清华自动化机电学系',
            info:'这里的专业为何数一数二，与北大的自动化有什么区别，听听师兄给你耐心解答',
            name:'暗*月',
            time:'2019年3月24',
            good_present:'95%',
            pay_person:'233',
            header_img:'../../image/image.jpg',
            img:'../../image/image.jpg'
        }]
    },
    //事件处理函数
    handlerChange:function(){
      console.log(222)
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse){
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
});
