Component({
    properties: {
        homeItem: {
            type: Object,
            value: 'default value',
        }
    },
    data: {
        someData: {}
    },
    methods: {
        gotoDatail(){
            let all_path = getCurrentPages();
            console.log(all_path[all_path.length-1].route);
            if(all_path[all_path.length-1].route === 'pages/home/home'){
                wx.navigateTo({
                    url:'../../pages/serviceDetail/serviceDetail?pageName=' + 'home'
                })
            }else if(all_path[all_path.length-1].route === 'pages/question/question'){
                wx.navigateTo({
                    url:'../../pages/serviceDetail/serviceDetail?pageName=' + 'question'
                })
            }
        }
    }
});