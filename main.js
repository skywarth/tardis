$('#goToBottom').click(function(){

    var WH = $(window).height();
    var SH = $('body').prop("scrollHeight");
    $('html, body').stop().animate({scrollTop: SH-WH}, 1000);

}); 