$('.slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    smartSpeed: 450,
    margin: 0,
    padding: 0,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


$('.hightlight .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    smartSpeed: 450,
    padding: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1920: {
            items: 5
        }
    }
})


$('.slideshow .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    smartSpeed: 450,
    padding: 0,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 1
        },
    }
})


$('.trending .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    smartSpeed: 450,
    padding: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 4
        },
        1170: {
            items: 4
        },
    }
})