$.get('json/01nav.json', function (data) {
    data = typeof data == "object" ? data : eval("(" + data + ")");
    console.log(data);
    MVC.addModel('tab', {
        data: data
    })

})
MVC.addView('tab', function (model, template) {
    console.log(123);
    var dom = $("<div class='container'></div>");
    var d = model.get("tab");
    var tpl = ['<div class="logo"><img src="img/cui.jpg"></div>',
        '<div class="nav"><ul class="list">{#list#}</ul></div>',
        '<div class="menu_right"><form><input type="text" placeholder="请输入你要找的内容"><button class="search"></button></form></div>'
    ].join('');
    var liTpl = [
        '<li class="menu_list">',
        '<a href="">{#headline#}</a>',
        '</li>'
    ].join('');
    var liTpl1 = [
        '<li class="menu_list">',
        '<a href="">{#headline#}</a>',
        '<ul class="select">',
        '<li>{#subhead#}</li>',
        '</ul>',
        '</li>'
    ].join('');

    var html = liHtml = '';
    console.log(d.data);
    for (var i = 0; i < d.data.data.length; i++) {
        if (i == 1 || i == 3) {
            var liTpl1 = [
                '<li class="menu_list">',
                '<a href="">{#headline#}</a>',
                '<ul class="select">'
            ].join('');
            for (var j = 0; j < d.data.data[i].subhead.length; j++) {
                liTpl1 += '<li>' + d.data.data[i].subhead[j] + '</li>';
            }
            liTpl1 += '</ul></li>';
            liHtml += template(liTpl1, d.data.data[i])
        } else {
            liHtml += template(liTpl, d.data.data[i])
        }
    }

    html = template(tpl, {
        list: liHtml
    });
    dom.html(html);
    dom.appendTo('.header');
    return dom;
})
MVC.addCtrl('tab', function (model, view) {
    var dom = view.create("tab");
    dom.delegate(".menu_list", "mouseover", function () {
        $(this).children(".select").show();
    })
    dom.delegate(".menu_list", "mouseleave", function () {
        $(this).children(".select").hide();
    })
})  

