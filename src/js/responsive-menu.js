$(window).on('load', function() {
    $('.responsive-menu-close').click(function() {
        $('.responsive-menu-container').animate({
            right: '-=100%',
        }, function() {
            $('.responsive-menu-container').hide();
        });
        
        $('body').removeClass('responsive-menu-opened');
    })
    
    $('.responsive-menu-btn').click(function() {
        $('body').addClass('responsive-menu-opened');
        $('.responsive-menu-container').show().animate({
            right: '0',
        })
    })
})