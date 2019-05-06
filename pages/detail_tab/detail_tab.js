//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        currentIndex: 0,
        "firstList": ["LXT", "LXT", "LXT", "LXT", "LXT", "LXT"],
        "secondList": ["GFF", "GFF", "GFF", "GFF", "GFF", "GFF", "GFF", "GFF"]
    },
    //swiper切换时会调用
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
    }
});
