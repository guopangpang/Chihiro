Component({
    properties: {
        innerText: {
            type: Object,
            value: 'default value',
        }
    },
    data: {
        now_path: '',
        person_img:'../../image/find_person.png',
        question_img:'../../image/find_question.png',
        my_img:'../../image/my.png',
        color_person:'',
        color_question:'',
        color_my:''
    },
    lifetimes: {
        // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
        attached() {
            let all_path = getCurrentPages();
            this.setData({
                now_path:all_path[all_path.length-1].route
            },function () {
                console.log(this.data.now_path);
                if(this.data.now_path === 'pages/home/home'){
                    this.setData({
                        person_img:'../../image/find_person_blue.png',
                        question_img:'../../image/find_question.png',
                        my_img:'../../image/my.png',
                        color_person:'#01A6F6',
                        color_question:'',
                        color_my:''
                    })
                }else if(this.data.now_path === 'pages/question/question'){
                    this.setData({
                        person_img:'../../image/find_person.png',
                        question_img:'../../image/find_question_blue.png',
                        my_img:'../../image/my.png',
                        color_person:'',
                        color_question:'#01A6F6',
                        color_my:''
                    })
                }else if(this.data.now_path === 'pages/my/my'){
                    this.setData({
                        person_img:'../../image/find_person.png',
                        question_img:'../../image/find_question.png',
                        my_img:'../../image/my_blue.png',
                        color_person:'',
                        color_question:'',
                        color_my:'#01A6F6'
                    })
                }
            })
        },
        moved() { },
        detached() { },
    },
    methods: {
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