Page({
    data:{
        reviewList:[]
    },
    onLoad(){
        this.changeReviewList()
    },
    changeReviewList(){
        let obj_list = {
            headerImg:'../../image/image3.jpg',
            name:'暗*月',
            time:'2019年5月7日',
            star:'5',
            title:'北大自动化',
            info:'想加入我，们昂想加入我们昂想加，入我们昂想加入我们昂想加。入我们昂,入我们昂,入我们昂入我们昂入我们昂'
        };
        let reviewList = this.data.reviewList;
        for(let i =0;i<6;i++ ){
            reviewList.push(obj_list)
        }
        this.setData({
            reviewList:reviewList
        });
    }
});