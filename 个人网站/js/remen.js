$.get('php/search_liu.php', function (data) {
    data=typeof data==="object" ? data:eval("("+data+")");
    var dataArray = data.data;
    for (let index = 0; index <5; index++) {
        const lis = $('<li></li').appendTo($(".rm_ul"));
        $("<img src=" + dataArray[index].img + ">").appendTo(lis);
        const dl = $("<dl></dl>").appendTo(lis);
        $("<dt>用户名:" + dataArray[index].user + "</dt>").appendTo(dl);
        $("<dd>评:" + dataArray[index].say + "</dd>").appendTo(dl);

    }
})