
function Yule(){
    this.longs=8;
    this.pages=1;
    this.init();
}
Yule.prototype={
    init(){
        var self=this;
            self.updated();
           
    },
    bindEventFn(){
        var self=this;
        $(".fen").find("li").on("click",function(){
            self.pages=Number($(this).html());
            self.updated();
        })
        $(".fen").find("span").on("click",function(){
            self.pages=1;
            self.updated();
        })
    },
    pageFn(data, page, num) {
        let array = [];
        for (let i = page * num - num; i < page * num && i < data.length; i++) {
            const element = data[i];
            array.push(element);
        }
        return array;
    },
    updated () {
        $(".yules").empty();
        var self = this;
        $.get("php/yule_search.php", { pages: this.pages, longs: this.longs }, function (data) {
            data = typeof data === "object" ? data : eval("(" + data + ")");
            var dataArray = data.data;
            var yeshu = Math.ceil(data.num / 8);
            var template = $("#template").html();
            var shu = self.pageFn(dataArray, self.pages, self.longs);
            for (var i = 0; i < shu.length; i++) {
                var emplie = _.template(template);
                var newString = emplie(shu[i]);
                $(".yules").append(newString);
            }
            var fen = $("<div class='fen'></div>").appendTo($(".yules"));
            var uls = $("<ul></ul>").appendTo(fen);
            $("<span>首页</span>").appendTo(uls)
            for (var y = 1; y <= yeshu; y++) {
                $("<li>" + y + "</li>").appendTo(uls)
            }
            var div = $("<div class='ye'><span>共<strong>" + yeshu + "</strong>页<strong>" + data.num + "</strong>条</span></div>").appendTo($(".fen"))
            self.bindEventFn();
        })
    }
}
new Yule();