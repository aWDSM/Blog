MVC
.addCtrl('tab', function (model, view) {
    var dom = view.create("tab");
    dom.delegate(".menu_list", "mouseover", function () {
        $(this).children(".select").show();
        $(this).css("background","#494949");
        $(this).children(".select").css("background", "#494949");
    })
    dom.delegate(".menu_list", "mouseleave", function () {
        $(this).children(".select").hide();
        $(this).css("background", "#000");
        $(this).children(".select").css("background", "#000");
    })
})
.addCtrl("sticky",function(model,view){
    var dom = view.create("sticky");
})
.addCtrl("publis", function (model, view) {
    var dom = view.create("publis");
})