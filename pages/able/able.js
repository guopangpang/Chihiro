Page({
    data:{
        person_info:{
            img:'../../image/image3.jpg',
            name:'暗*月',
            telephone:'15111111111'
        },
        able_list:[]
    },
    onLoad(){
        this.change_able_list()
    },
    change_able_list(){
        let obj = {
            title:'自动化生活与行业现状',
            info:'我在杭州生活学习三年有余，做了许多项目，对这一块技术有比较多的了解，也喜欢给学的讲解学校里面的趣事,',
            person_num:'120',
            money:'1.00',
            img:'../../image/image2.jpg'
        };
        let list = [];
        for(let i=0;i<6;i++){
            list.push(obj)
        }
        this.setData({
            able_list:list
        })
    }
});