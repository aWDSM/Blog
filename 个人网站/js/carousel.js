var data = ["http://www.zbboke.com/templets/boke/picture/banner.gif", "http://www.zbboke.com/templets/boke/picture/banner_1.jpg","http://www.zbboke.com/templets/boke/picture/banner_3.jpg"];
for(var i=0;i<data.length;i++){
    var divs = $("<div class='swiper-slide'></div>").appendTo($(".swiper-wrapper"));
    $("<img class='swiper-lazy' src=" + data[i] + ">").appendTo(divs);
    $("<div class='swiper-lazy-preloader'></div>").appendTo(divs);
}