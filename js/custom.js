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

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


const hotelListing = `
			<div class="result-box-container">
				<div class="result-box-container-left">
					<img src="./images/hotel.png" alt="Hotel Image">
				</div>
				<div class="result-box-container-right">
					<div class="content">
						<h6>Fairfield by Marriott Goa Calangute</h6>
						<span class="location">Calangute, Goa</span>
						<div class="facilities">
							<div class="facilities-box">
								<img src="./images/pool.svg" alt="Swimming Pool">
								<span>Swimming Pool</span>
							</div>
							<div class="facilities-box">
								<img src="./images/restaurant.svg" alt="Restaurant">
								<span>Restaurant</span>
							</div>
						</div>
						<p>Unlock Goa with the perfect stay with 2 pints of chilled beers & discount on F&B at Fairfield by Marriott Calangute.</p>
						<div class="rating-verify">
							<span class="rating">9/10</span>
							<p>2 Verified Ratings</p>
						</div>
					</div>
					<div class="content-right">
						<div class="parking-rating">
							<button type="button" class="btn btn-secondary parking" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Parking">
								<i class="bi bi-car-front-fill"></i>
							</button>
							<div class="star-rating">
								<img src="./images/grade.svg" alt="3 Star Hotel">
								<p>3 Star Hotel</p>
							</div>
						</div>
						<div class="price-rate">
							<span class="left_at">3 left at</span>
							<div class="price-cut">
								<p><s>15,000</s></p>
								<div class="price-night">
									<h5>₹4,950</h5>
									<p>per night</p>
								</div>
							</div>
							<div class="rest-detials">
								<p>₹25,974 total includes taxes & fees</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		`;

		const listingsContainer = document.getElementById('hotel-listings');
		for (let i = 0; i < 7; i++) {
			listingsContainer.innerHTML += hotelListing;
		}