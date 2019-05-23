
Page({
    data:{
        questionList:[]
    },
    onLoad(){
        this.getQuestionList();
    },
    getQuestionList(){
        let obj = {
            title:'小锅米线加盟有什么流程',
            info:'加盟小锅米线都需要什么，自己有加盟的想法，但是不清楚都需要怎样的条件',
            name:'暗*月',
            time:'2019年3月24',
            good_present:'95%',
            pay_person:'233',
            header_img:'../../image/image.jpg',
            img:'../../image/image.jpg'
        };
        for(let i=0;i<6;i++){
            this.data.questionList.push(obj)
        }
        this.setData({
            questionList:this.data.questionList
        })
    }
});