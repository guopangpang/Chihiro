//index.js
//获取应用实例
const app = getApp();

Page({
    data: {
        currentIndex: 0,
        serviceDetail:[],
        review:{},
        review_header:{
            total:'106',
            present:'95%',
            showAll:true
        },
        question_owner:{
            headerImg:'../../image/image3.jpg',
            name:'暗*月'
        },
        autoplay:true,
        indicator_dots:true,
        interval:5000,
        indicator_color:'#ededed',
        indicator_active_color:'#03abf6'
    },
    //swiper切换时会调用
    onLoad(){
      let obj = {
          headerImg:'../../image/image3.jpg',
          name:'暗*月',
          time:'2019年5月7日',
          star:'5',
          title:'北大自动化',
          info:'想加入我，们昂想加入我们昂想加，入我们昂想加入我们昂想加。入我们昂,入我们昂,入我们昂入我们昂入我们昂'
      };
      this.setData({
          review:obj
      });

      let obj_service = {
          headerImg:'../../image/image3.jpg',
          name:'暗*月',
          time:'2019年5月7日',
          paid:'1.00',
          title:'北大自动化',
          info:'想加入我，们昂想加入我们昂想加，入我们昂想加入我们昂想加。入我们昂,入我们昂,入我们昂入我们昂入我们昂',
          imgList:['../../image/image3.jpg','../../image/image2.jpg','../../image/image4.jpg','../../image/image.jpg','../../image/image2.jpg'],
          frequency:1000
      };
      this.setData({
          serviceDetail:obj_service
      });
    },
    pagechange: function (e) {
        console.log('pagechange',e.detail);
        if ("touch" === e.detail.source) {
            let currentPageIndex = this.data.currentIndex;
            currentPageIndex = (currentPageIndex + 1) % 2;
            this.setData({
                currentIndex: currentPageIndex
            })
        }
    },
    //用户点击tab时调用
    titleClick: function (e) {
        console.log('titleClick',e);
        this.setData({
            //拿到当前索引并动态改变
            currentIndex: e.currentTarget.dataset.idx
        })
    },
    gotoAbleList(){
        wx.navigateTo({
            url:'../../pages/able/able'
        })
    },
    gotoAdvisory(){
        wx.navigateTo({
            url:''
        })
    }
});
