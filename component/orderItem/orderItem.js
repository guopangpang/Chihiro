Component({
   properties:{
       order_item:{
           type:Object,
           default:''
       }
   },
   data:{

   },
    methods:{
        show_change_price() {
            const myEventDetail = {item:this.properties.order_item}; // detail对象，提供给事件监听函数
            const myEventOption = {}; // 触发事件的选项
            this.triggerEvent('show_change_price', myEventDetail, myEventOption)
        },
       //显示修改价格弹出框
        change_price(){
            this.setData({
                show_shadow:true
            })
        },
        send_order(){

        }
    },
});