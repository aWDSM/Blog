$.get("php/publish.php",function(data){
    data=typeof data==="object" ? data :eval("("+data+")");
    // console.log(data);
    var arry=[];
    var dataArray=data.data;
    for(var i=0;i<dataArray.length;i++){
        var lis = $("<li></li>").appendTo($(".w_ul"));
        var img=$("<img src="+dataArray[i].img+">").appendTo(lis);
        var dl=$("<dl></dl>").appendTo(lis);
        var dt=$("<dt>"+dataArray[i].header+"</dt>").appendTo(dl);
        var dd=$("<dd></dd>").appendTo(dt);
         $("<span class='tm'>" + dataArray[i].times +"</span>").appendTo(dd);
        $("<span class='cs'>" + dataArray[i].browse+ "</span>").appendTo(dd);
    }
    // console.log(arry)
    // var a="123dad";
    // var b = a.replace(/[^0-9]/ig, "");
    // console.log(b)
    // function mySorter(a, b) {
    //     if (/^\d/.test(a.replace(/[^0-9]/ig, "")) ^ /^\D/.test(b.replace(/[^0-9]/ig, ""))) return a > b ? 1 : (a == b ? 0 : -1);
    //     return a > b ? -1 : (a == b ? 0 : 1);
    // }
    // var c=[];
    // console.log(arry.sort(mySorter));
    // console.log(c);
})