var img = ["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3506988018,3674983071&fm=26&gp=0.jpg", "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1243666076,2330758133&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4134179384,1434401234&fm=26&gp=0.jpg", "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1749367119,3083554080&fm=26&gp=0.jpg", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1680064440,768084260&fm=26&gp=0.jpg","https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3734787058,1983546139&fm=26&gp=0.jpg"];
function LiuYan(){
    this.img = $(".active").find("img").attr("src");
    this.updated();
    this.init();
    this.bindEvent();
}
LiuYan.prototype={
    constructor:LiuYan,
    init(){
        for (var i = 0; i < img.length; i++) {
            var lis = $("<li></li>").appendTo($(".liu ul"));
            $("<img src=" + img[i] + ">").appendTo(lis);
        }
        $(".liu li").eq(0).addClass("active");
    },
    bindEvent(){
        var self=this;
        $(".liu").on("click", "li", function () {
            $(".liu li").removeClass("active");
            $(this).addClass("active");
        })
        $(".syyx").click(function () {
            var user = $("input[name='user']").val();
            var say=$("#tarea").val();
            self.img = $(".active").find("img").attr("src");
            if (user=='' || say==''){
                alert("不能为空")
                return;
            }
            self.jsonFn();
            
        })
    },
    jsonFn(){
        var self=this;
        var user = $("input[name='user']").val();
        var say = $("#tarea").val();
        $.post("php/liu.php",{user:user,say:say,img:self.img},function(data){
           if(data.code=="200"){
               alert("插入成功");
               self.updated();
           }
        })
    },
    updated () {
        $(".liu_list").empty();
        $.get("php/search_liu.php",function(data){
            var dataArray =data.data;
            var arry=[];
            for(var i=dataArray.length-1;i>=0;i--){
                arry.push(dataArray[i]);
            }
            for (let index = 0; index < arry.length; index++) {
                const lis=$('<li></li').appendTo($(".liu_list"));
                $("<img src="+arry[index].img+">").appendTo(lis);
                const dl=$("<dl></dl>").appendTo(lis);
                $("<dt>用户名:<span>"+arry[index].user+"</span></dt>").appendTo(dl);
                $("<dd>say:<span>" + arry[index].say + "</span><span class='tms'>"+arry[index].times+"</span></dd>").appendTo(dl);
                
            }
        })
    }
}
new LiuYan();