$(function () {
  $(".main_left li").on("click", function () {
    var address = $(this).attr("data-src");
    $(this).siblings('li').removeClass('selected');
    $(this).addClass('selected');
    $("iframe").attr("src", address);
  });
}); 