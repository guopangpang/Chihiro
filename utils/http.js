function post(url,data,callback) {
    wx.request({
        url: url, //上线的话必须是https，没有appId的本地请求貌似不受影响
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
            'Content-Type': "application/x-www-form-urlencoded",
            'Cookie': 'SESSION=' + wx.getStorageSync("sessionId")||''
        }, // 设置请求的 header
        data: data,
        success: function(res) {
            console.log("请求数据成功");
            if(typeof callback === "function"){
                callback(res)
            }
        },
        fail: function() {
            console.log("请求数据失败");
            if(typeof callback === "function"){

            }
        },
        complete: function() {
            // complete
            console.log("请求数据完成");
        }
    })
}


module.exports = {
    post:post
};
