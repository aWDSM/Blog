var array = ["php","Dreamweaver","html","js","css","崔鹏辉","博客","ajax","MySQL","搞笑","娱乐","canvas","echarts"];
for (let i = 0; i < array.length; i++) {
    $("<li><a>"+array[i]+"</a></li>").appendTo($(".tag_list ul"));
}
$.get("json/03publish.json",function(data){
    data=typeof data==="object" ? data:eval("("+data+")");
    var dataArray=data.data;
   for (var i = 0; i < dataArray.length; i++) {
           var lis=$("<li></li>").appendTo($(".post_list ul"));
           var lia=$("<a href=''></a>").appendTo(lis)
        $("<img class='thumbnail' src="+dataArray[i].img+">").appendTo(lia);
        $("<span class='text_b'>"+dataArray[i].header+"</span class='muted'>").appendTo(lia);
       $("<span class='time_b'>" + dataArray[i].times + "</span class='muted'>").appendTo(lia);
        $("<span class='counts'>78次阅读</span>").appendTo(lia);
       
   }
})