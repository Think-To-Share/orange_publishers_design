$('.do-and-dont-header a').click(function(e) {
    e.preventDefault();
    $('.do-and-dont-header a').removeClass('active');
    $(this).addClass('active');
    $('.do-and-dont-body').removeClass('active');
    let target = $(this).data('target');
    $(target).addClass('active');
})