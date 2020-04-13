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
    "username" : "58382679",
    "gdzh" : "00109207787",
    "sh_gdzh" : "A484928121",
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
            "start" : "09:30",
            "end" : "14:50"
        },
        "index_percent" : {
            "low" : "-0.2",
            "high" : "3.5"
        },
        "percent" : {
            "low" : "2.5",
            "high" : "5.0"
        },
        "open_percent" : {
            "low" : "-2.0",
            "high" : "3.0"
        },
        "speed" : {
            "upper_shadow" : "0.2",
            "ratio_l" : "2",
            "ratio_r" : "3",
            "time" : "2",
            "break_top" : "1.5",
            "time_2" : "2",
            "percent" : "2",
            "amount" : "800"
        },
        "volume" : 20000
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
        "monitorTime" : {
            "start" : "09:30",
            "end" : "14:45"
        },
        "index_percent" : "0.80",
        "index_max_percent" : "5.0",
        "concepts" : "医疗废物处理,云计算,云办公,云游戏,消毒剂,数字中国,边缘计算,国产软件,集成电路概念,网络安全,污水处理,无人零售,芯片概念,固废处理,光刻胶,大数据,华为海思概念股,国产操作系统,在线教育,手机游戏,垃圾分类,知识产权保护,网络游戏,数字货币,人工智能,区块链,华为概念,电子竞技,5G,口罩,卫星导航,澳交所概念,非科创次新股,车联网,柔性屏,文化传媒,互联网保险,汽车电子,虚拟现实,人民币贬值受益,独角兽概念,智能物流,无人驾驶,氢能源,横琴新区,富士康概念,创投,供应链金融,跨境电商,电子商务,智能音箱,智能穿戴,智能医疗,光伏概念,长三角一体化,北汽新能源,燃料电池,无线耳机,年报预增,充电桩,苹果概念,物流电商平台,新零售,网红经济,农村电商,胎压监测,无线充电,乡村振兴,稀土永磁,锂电池,特斯拉,新能源汽车,冷链物流,小金属概念,石墨烯,黄金概念,粤港澳大湾区,稀缺资源,超级品牌,互联网医疗,宁德时代概念,ST板块,钴,燃料乙醇,石墨电极,高校,人造肉,水泥,工业大麻,语音技术,健康中国,基因测序,医疗器械概念,细胞免疫治疗,医药电商,民营医院,生物医药,青蒿素,眼科医疗,仿制药一致性评价,芬太尼,动物疫苗,禽流感,流感,生物疫苗,超级真菌",
        "company_count" : "250",
        "net_buy" : "-20",
        "stock_percent" : "9.90",
        "top_concept" : "5",
        "max_concept" : "6",
        "monitor_count" : "6",
        "min_open_percent" : "-2.0",
        "max_open_percent" : "3.0",
        "min_percent" : "2.5",
        "max_percent" : "5.0",
        "volume" : "20000",
        "strategyId" : "5da19b7d181fc3600c5544c3"
    }
},{
    "_id" : ObjectId("5da19b7d181fc3600c5544c6"),
    "name" : "批量异动拉升",
    "description" : "同时对一组股票进行异动拉升监控",
    "op" : "buy",
    "url" : "BatchYdls",
    "parameters" : {
        "code" : "",
        "executeDate" : "",
        "monitorTime" : {
            "start" : "00:00",
            "end" : "23:59"
        },
        "desc" : "其它",
        "strategyId" : "5da19b7d181fc3600c5544c3",
        "open_percent_low" : "-2.0",
        "open_percent_high" : "3.5",
        "max_stock_percent" : "7.0",
        "volume" : "10000"
    }
}]);