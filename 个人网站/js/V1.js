MVC
.addView('tab', function (model, template) {
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
    for (var i = 0; i < d.data.data.length; i++) {
        if (i == 1 || i == 3) {
            var liTpl1 = [
                '<li class="menu_list">',
                '<a href="">{#headline#}</a>',
                '<ul class="select">'
            ].join('');
            for(var j=0;j<d.data.data[i].subhead.length;j++){
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
.addView('sticky',function(model,template){
    var dom = $("<div class='sticky'></div>");
    var d = model.get('sticky');
    var tpl=[
        '<h2>特别推荐</h2>',
        '<ul>{#list#}</ul>'
    ].join('');
    var liTpl=[
        '<li class="item">',
            '<a>',
                '<img src="{#img#}">',
                "<h3>{#h3#}</h3>",
                "<p>{#p#}</p>",
            '</a>',
        ,'</li>'
    ].join('');
    var html=liHtml='';
    for(var i=0;i<d.data.length;i++){
        liHtml+=template(liTpl,d.data[i])
    }
    html=template(tpl,{
        list:liHtml
    })
    dom.html(html);
    dom.appendTo($(".con_l"));
    return dom;
})
.addView('publis', function (model, template){
    var dom=$('<div></div>');
    var d = model.get('publis');
    var tpl = [
        '<h2>最新发布</h2>',
        '{#list#}',
    ].join('');
    var liTpl = [
        '<div class="excerpt">',
            '<div class="focus"><a><img src="{#img#}"></a></div>',
            '<h2>{#header#}</h2>',
            '<p>{#note#}</p>',
            '<p>',
                '<span>',
                    '<i class="icon"></i>',
                    '{#user#}',
                '</span>',
                '<span>',
                    '<i class="icon"></i>',
                    '{#times#}',
                '</span>',
                '<span>',
                    '<i class="icon"></i>',
                    '{#browse#}',
                '</span>',
                '<span>',
                    '<i class="icon"></i>',
                    '{#sina#}',
                '</span>',
            '</p>',
        '</div>'
    ].join('');
    var html = liHtml = '';
    for (var i = 0; i < d.data.length; i++) {
        liHtml += template(liTpl, d.data[i])
    }
    html = template(tpl, {
        list: liHtml
    })
    dom.html(html);
    dom.appendTo($(".con_l"));
    return dom;
})