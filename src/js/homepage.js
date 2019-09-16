// $('#bannerServiceCat').select2({
//     theme: "default"
// });
// $('#bannerService').select2();

require('../../node_modules/bootstrap/js/src/carousel');
require('../../node_modules/bootstrap/js/src/modal');

function changeCallSectionPos(resize = false) {
    let callSection = $('.orange-call-section .container');

    if(callSection.length > 0) {
        let topToSet = (0 - (callSection.innerHeight() / 2));
        if(resize == true) {
            topToSet = (0 - (callSection.innerHeight() / 2));
        }
        callSection.css('top', topToSet);
    }
    return;
}

$(window).on('load', function() {
    changeCallSectionPos();
    $(window).resize(() => {
        changeCallSectionPos(true);
    })

    let aboutSectionVideo = $('.orange-about-section .orange-about-video .video-main video');
let aboutSectionVideoPlay = $('.orange-about-section .container .orange-about-video .video-main .play-icon');
let aboutSectionVideoOverlay = $('.orange-about-section .container .orange-about-video .video-main .overlay');
let aboutSectionVideoPaused = false;

aboutSectionVideoPlay.click(() => {
    aboutSectionVideoOverlay.fadeOut();
    aboutSectionVideoPlay.fadeOut();
    aboutSectionVideo.get(0).play();

    aboutSectionVideo.on('ended', function() {
        aboutSectionVideoEnded = true;
    })
});

aboutSectionVideo.click(() => {
    if(!aboutSectionVideoPaused) {
        aboutSectionVideo.get(0).pause();
        aboutSectionVideoPaused = true;
        return;
    }

    aboutSectionVideo.get(0).play();
    aboutSectionVideoPaused = false;
})

});