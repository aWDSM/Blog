$.get("json/yule.json", function (data) {
    data = typeof data === "object" ? data : eval("(" + data + ")");
    var dataArray = data.data;
    for (let index = 0; index < dataArray.length; index++) {


        $.post("php/yule.php", dataArray[index], function (data) {
            console.log(data);
        })
    }
})