$(document).ready(function(){
    const lazyLoadInstance = new LazyLoad({
        elements_selector:"img.lazy, video.lazy, div.lazy, section.lazy, header.lazy, footer.lazy,iframe.lazy"
    });
    window.addEventListener('scroll', function() {
       if (window.scrollY > 50) {
            $('#navbar').addClass('fixed-top');
            $('#black-logo').removeClass('d-none');
            $('#white-logo').addClass('d-none');
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            $('#navbar').removeClass('fixed-top');
             $('#white-logo').removeClass('d-none');
             $('#black-logo').addClass('d-none');
            document.body.style.paddingTop = '0';
        } 
    });
});

$('#destination-slider').slick({     
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1,
    arrows: true,
    prevArrow:'<i class="icon-left-open-1 arrow left-arrow"></i>',
    nextArrow:'<i class="icon-right-open-1 arrow right-arrow"></i>',
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '30px',
        }
    }]
});
$('#slider-II').slick({     
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1,
    arrows: true,
    prevArrow:'<i class="icon-left-open-1 arrow left-arrow"></i>',
    nextArrow:'<i class="icon-right-open-1 arrow right-arrow"></i>',
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '30px',
        }
    }]
});


$('#destination-slider-II').slick({     
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1,
    arrows: true,
    prevArrow:'<i class="icon-left-open-1 arrow left-arrow"></i>',
    nextArrow:'<i class="icon-right-open-1 arrow right-arrow"></i>',
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '30px',
        }
    }]
});


