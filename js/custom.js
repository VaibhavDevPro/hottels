$(document).ready(function () {
    const lazyLoadInstance = new LazyLoad({
        elements_selector: "img.lazy, video.lazy, div.lazy, section.lazy, header.lazy, footer.lazy,iframe.lazy"
    });
    window.addEventListener('scroll', function () {
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
    prevArrow: '<i class="icon-left-open-1 arrow left-arrow"></i>',
    nextArrow: '<i class="icon-right-open-1 arrow right-arrow"></i>',
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }, {
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
    prevArrow: '<i class="icon-left-open-1 arrow left-arrow"></i>',
    nextArrow: '<i class="icon-right-open-1 arrow right-arrow"></i>',
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }, {
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
    prevArrow: '<i class="icon-left-open-1 arrow left-arrow"></i>',
    nextArrow: '<i class="icon-right-open-1 arrow right-arrow"></i>',
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '30px',
        }
    }]
});



// price range  
// window.onload = function(){
//   // Set initial values for the sliders
//   sliderOne.value = 1000;
//   sliderTwo.value = 25000;
// }
window.onload = function () {
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    console.log(" 1 " + sliderOne.value + " 2 " + sliderTwo.value);
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #F1F1F1 ${percent1}% , #1A1F24 ${percent1}% , #1A1F24 ${percent2}%, #F1F1F1 ${percent2}%)`;
}


// Change option selected
const label = document.querySelector(".dropdown__filter-selected");
const options = Array.from(
document.querySelectorAll(".dropdown__select-option"));


options.forEach(option => {
  option.addEventListener("click", () => {
    label.textContent = option.textContent;
  });
});

// Close dropdown onclick outside
document.addEventListener("click", e => {
  const toggle = document.querySelector(".dropdown__switch");
  const element = e.target;

  if (element == toggle) return;

  const isDropdownChild = element.closest(".dropdown__filter");

  if (!isDropdownChild) {
    toggle.checked = false;
  }
});