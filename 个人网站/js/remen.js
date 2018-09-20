$.get('php/search_liu.php', function (data) {
    data=typeof data==="object" ? data:eval("("+data+")");
    var dataArray = data.data;
    var arry=[];
    for(var i=dataArray.length-1;i>=0;i--){
        arry.push(dataArray[i]);
    }
    for (let index = 0; index <5; index++) {
        const lis = $('<li></li').appendTo($(".rm_ul"));
        $("<img src=" + arry[index].img + ">").appendTo(lis);
        const dl = $("<dl></dl>").appendTo(lis);
        $("<dt>用户名:" + arry[index].user + "</dt>").appendTo(dl);
        $("<dd>评:"+arry[index].say+"</dd>").appendTo(dl);
        $("<dd>时间:"+arry[index].times+"</dd>").appendTo(dl);
    }
})