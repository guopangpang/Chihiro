Component({
    properties: {
        homeItem: {
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
        gotoDatail(){
            wx.navigateTo({
                url:'../../pages/service_detail/service_detail'
            })
        }
    }
})