$.get('json/01nav.json', function (data) {
    data=typeof data=="object" ? data:eval("("+data+")");
        MVC.addModel('tab', {
                data:data
            })
        
});
$.get("php/insert.php", function (data) {
    if(data.data.length==0){
        return;
    }
    MVC.addModel('sticky', {
        data: data.data
    })
})
$.get("php/publish.php",function(data){
    MVC.addModel('publis',{
        data:data.data
    })
})
