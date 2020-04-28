$(window).on('load', function() {
    scrollToTopBtn();

    $(window).scroll(function() {
        scrollToTopBtn();
    });

    $("#totop").click(function() {
        $(window).scrollTop(0);
    })
})

function scrollToTopBtn() {
    if($(window).scrollTop() > 100) {
        $("#totop").show();
    }else {
        $("#totop").hide();
    }
}