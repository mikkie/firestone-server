db.createCollection('users');
db.users.insert({
   username: "admin",
   password: "e10adc3949ba59abbe56e057f20f883e",
   _id: ObjectId("5d905db9fc84d3224b0eb59c")
});
db.configmocks.insert({
    "maxBuyNum" : 3,
    "curBuyNum" : 0,
    "ths_url" : "http://mncg.10jqka.com.cn/cgiwt/index/index",
    "cookie" : "__utma=156575163.1101180334.1557107567.1557375466.1557738304.3; __utmz=156575163.1557738304.3.3.utmcsr=yamixed.com|utmccn=(referral)|utmcmd=referral|utmcct=/fav/article/2/157; isSaveAccount=0; PHPSESSID=0ee41a659eca05d9c02da980b42b337b; Hm_lvt_78c58f01938e4d85eaf619eae71b4ed1=1570773015,1570773052,1572246079; user=MDphcXVhSVFjOjpOb25lOjUwMDo0MjUzOTk0Njc6NywxMTExMTExMTExMSw0MDs0NCwxMSw0MDs2LDEsNDA7NSwxLDQwOzEsMSw0MDsyLDEsNDA7MywxLDQwOzUsMSw0MDs4LDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxLDQwOjI0Ojo6NDE1Mzk5NDY3OjE1NzIyNDYwOTc6OjoxNTA2MDQ4OTYwOjg2NDAwOjA6MThkZjg4MDU4NWQ1MjAxNWI4YjczMmQ1YjVjY2Q4MjdiOmRlZmF1bHRfMjox; userid=415399467; u_name=aquaIQc; escapename=aquaIQc; ticket=4946f5e543fb81ad0500537a32fbb290; log=; v=ApOFSy-Cygxe94ZYp7X7ueKFIhy-SCcK4dxrPkWw77LpxL1KzRi3WvGs-4FW; Hm_lpvt_78c58f01938e4d85eaf619eae71b4ed1=1572246108",
    "username" : "48039195",
    "gdzh" : "0098894246",
    "sh_gdzh" : "A474614369",
    "monitor_concept" : [],
    "userId" : ObjectId("5d905db9fc84d3224b0eb59c")
});
db.strategies.insertMany([{
    "_id" : ObjectId("5da19b7d181fc3600c5544c2"),
    "name" : "基础策略",
    "description" : "在<i>监控时间</i>范围内,当<i>大盘涨幅</i>处于指定范围，并且当前<i>个股涨幅</i>处于指定范围，则买入股票",
    "op" : "buy",
    "url" : "Basic",
    "parameters" : {
        "code" : "",
        "executeDate" : "",
        "monitorTime" : {
            "start" : "10:30",
            "end" : "15:00"
        },
        "index_percent" : {
            "low" : "-3.0",
            "high" : "-0.7"
        },
        "percent" : {
            "low" : "-4",
            "high" : "-1"
        },
        "volume" : 1000
    }
},{
    "_id" : ObjectId("5da19b7d181fc3600c5544c3"),
    "name" : "异动拉升",
    "description" : "在<i>监控时间</i>范围内,当<i>大盘涨幅</i>处于指定范围，并且当前<i>个股涨幅</i>处于指定范围，在<i>异动时间</i>内，<i>成交额</i>达到预期值，大盘涨幅<0时，个股涨幅>=大盘涨幅*<i>大盘比例(左)</i>，大盘涨幅>=0时，个股涨幅>=大盘涨幅*<i>大盘比例(右)</i> 则买入股票",
    "op" : "buy",
    "url" : "Ydls",
    "parameters" : {
        "code" : "",
        "executeDate" : "",
        "monitorTime" : {
            "start" : "10:00",
            "end" : "14:30"
        },
        "index_percent" : {
            "low" : "-0.3",
            "high" : "1.5"
        },
        "percent" : {
            "low" : "-1",
            "high" : "2.0"
        },
        "speed" : {
            "lower_shadow" : "0.25",
            "ratio_l" : "2",
            "ratio_r" : "3",
            "time" : "2",
            "amount" : "500"
        },
        "volume" : 1000
    }
},{
    "_id" : ObjectId("5da19b7d181fc3600c5544c4"),
    "name" : "基础策略",
    "description" : "在<i>监控时间</i>范围内,成本涨幅大于<i>起始点</i>开始动态止盈止损，另外<i>涨幅</i>低于强制<i>止损线</i>或<i>涨停</i>，强制卖出股票",
    "op" : "sell",
    "url" : "BasicSell",
    "parameters" : {
        "code" : "",
        "executeDate" : "",
        "monitorTime" : {
            "start" : "09:30",
            "end" : "15:00"
        },
        "cb" : "",
        "start_line" : 0,
        "hard_stop" : -4,
        "sell_on_zt" : "1",
        "soft_stop" : {
            "hit_stop_limit" : 5,
            "max_loss" : 2.5,
            "max_index" : 2.0,
            "ratio_stock" : 7,
            "ratio_index" : 3
        },
        "volume" : 1000
    }
},{
    "_id" : ObjectId("5da19b7d181fc3600c5544c5"),
    "name" : "题材选股",
    "description" : "根据实时热门概念排行选出股票进行监控",
    "op" : "select",
    "url" : "ConceptPick",
    "parameters" : {
        "code" : "N/A",
        "executeDate" : "",
        "index_percent" : "1.00",
        "company_count" : "500",
        "stock_percent" : "9.90",
        "top_concept" : "3",
        "max_percent" : "5.00",
        "volume" : "1000",
        "strategyId" : "5da19b7d181fc3600c5544c3"
    }
}]);