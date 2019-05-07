Component({
    properties: {
        innerText: {
            type: Object,
            value: 'default value',
        }
    },
    data: {
        // 这里是一些组件内部数据
        someData: {}
    },
    methods: {
        // 这里是一个自定义方法
        gotoHome(){
            wx.navigateTo({
                url:'../../pages/home/home'
            })
        },
        gotoMy(){
            wx.navigateTo({
                url:'../../pages/my/my'
            })
        },
        gotoQuestion(){
            wx.navigateTo({
                url:'../../pages/question/question'
            })
        }
    }
});