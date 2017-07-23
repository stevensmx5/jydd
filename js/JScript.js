function move_top() {
    $("html, body").scrollTop(0);
}
function news_img(a) {
    var id = $(a).attr("id"),
        src = "../images/" + id + ".png";
    $(a).siblings().removeClass("curr");
    $(a).addClass("curr");
    $(".o-img").find("img").attr("src", src);
}