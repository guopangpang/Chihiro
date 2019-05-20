Component({
    properties: {
        reviewItem: {
            type: Object,
            value:'defaule value'
        },
        add_review:{
            type: Boolean,
            value:false
        }
    },
    data:{
        owndata:''
    },
    methods:{
        gotoAddReview(){
            wx.navigateTo({
                url:'../../pages/addReview/addReview?more_review=' + this.properties.add_review
            })
        }
    }
});