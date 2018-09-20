$.get('json/01nav.json', function (data) {
    data=typeof data=="object" ? data:eval("("+data+")");
        MVC.addModel('tab', {
                data:data
            })
        
});
$.get("php/insert.php", function (data) {
    MVC.addModel('sticky', {
        data: data.data
    })
})
$.get("php/publish.php",function(data){
    MVC.addModel('publis',{
        data:data.data
    })
})
