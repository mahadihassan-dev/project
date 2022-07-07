$(document).ready(function(){
    // Project Gallery
    $('.project_gallery_img').venobox({});
    
    // Testimonial Slide
    $('.testimonial_slide_tray').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // Client Review Slider
    $('.client_review_slide_track').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    // Client Review Video Playback
    $('.video_playbtn').venobox({});

    // Project Filter
    var containerEl = document.querySelector('.project_grallery_card-row');

    var mixer = mixitup(containerEl);
});