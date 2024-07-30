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
    var fp = flatpickr(".check-in", {

    })
    var fp = flatpickr(".check-out", {

    })

    $('.select2-class').select2({
      placeholder: 'Select an option'
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
        breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
          }
        },{
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              
            
          }
        },{
          breakpoint: 546,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
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
        breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              
          }
        },{
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
             
            
          }
        },{
          breakpoint: 546,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
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
        breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
          }
        },{
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          }
        },{
          breakpoint: 546,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
      }]
});



(function ($) {
    "use strict";
    
    (function () {

        // Add Adult & childElementCount
        const guestBtn = document.querySelector("#guests-input-btn"),
            guestOptions = document.querySelector("#guests-input-options"),
            adultsSubsBtn = document.querySelector("#adults-subs-btn"),
            adultsAddBtn = document.querySelector("#adults-add-btn"),
            childrenSubsBtn = document.querySelector("#children-subs-btn"),
            childrenAddBtn = document.querySelector("#children-add-btn"),
            roomSubsBtn = document.querySelector("#room-subs-btn"),
            roomAddBtn = document.querySelector("#room-add-btn"),
            adultsCountEl = document.querySelector("#guests-count-adults"),
            childrenCountEl = document.querySelector("#guests-count-children"),
            roomCountEl = document.querySelector("#guests-count-room");
        let maxNumGuests = 15,
            isGuestInputOpen = false,
            adultsCount = 1,
            childrenCount = 0,
            roomCount = 0;
        updateValues();
        guestBtn.addEventListener('click', function (e) {
            if (isGuestInputOpen) {
                guestBtn.classList.remove("open");
                guestOptions.classList.remove("open");
            } else {
                guestBtn.classList.add("open");
                guestOptions.classList.add("open");
            }
            isGuestInputOpen = isGuestInputOpen ? false : true;
            e.preventDefault();
        });
        adultsAddBtn.addEventListener('click', function () {
            adultsCount = addValues(adultsCount);
            updateValues();
        });
        adultsSubsBtn.addEventListener('click', function () {
            adultsCount = substractValues(adultsCount, 1);
            updateValues();
        });
        childrenAddBtn.addEventListener('click', function () {
            childrenCount = addValues(childrenCount);
            updateValues();
        });
        childrenSubsBtn.addEventListener('click', function () {
            childrenCount = substractValues(childrenCount, 0);
            updateValues();
        });
        roomAddBtn.addEventListener('click', function () {
            roomCount = addValues(roomCount);
            updateValues();
        });
        roomSubsBtn.addEventListener('click', function () {
            roomCount = substractValues(roomCount, 0);
            updateValues();
        });

        function calcTotalGuests() {
            return adultsCount + childrenCount + roomCount;
        }

        function addValues(count) {
            return (calcTotalGuests() < maxNumGuests) ? count + 1 : count;
        }

        function substractValues(count, min) {
            return (count > min) ? count - 1 : count;
        }

        function updateValues() {
            let btnText = `${adultsCount} Adults`;
            btnText += (childrenCount > 0) ? `, ${childrenCount} Childs` : '';
            btnText += (roomCount > 0) ? `, ${roomCount} Rooms` : '';
            guestBtn.innerHTML = btnText;
            adultsCountEl.innerHTML = adultsCount;
            childrenCountEl.innerHTML = childrenCount;
            roomCountEl.innerHTML = roomCount;
            if (adultsCount == 1) {
                adultsSubsBtn.classList.add("disabled");
            } else {
                adultsSubsBtn.classList.remove("disabled");
            } if (childrenCount == 0) {
                childrenSubsBtn.classList.add("disabled");
            } else {
                childrenSubsBtn.classList.remove("disabled");
            } if (roomCount == 0) {
                roomSubsBtn.classList.add("disabled");
            } else {
                roomSubsBtn.classList.remove("disabled");
            } if (calcTotalGuests() == maxNumGuests) {
                adultsAddBtn.classList.add("disabled");
                childrenAddBtn.classList.add("disabled");
                roomAddBtn.classList.add("disabled");
            } else {
                adultsAddBtn.classList.remove("disabled");
                childrenAddBtn.classList.remove("disabled");
                roomAddBtn.classList.remove("disabled");
            }
        }

    })();
    
    
})(this.jQuery);

$(window).on('click', function(e) {
    if(!$(e.target).closest('.room-search').length && !$(e.target).closest('.search-sections-part').length){
        if(!$('.search-sections-part').hasClass('d-none')){
            $('.search-sections-part').addClass('d-none');
        }
    }
});


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




$('#hotel-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    prevArrow: '<i class="icon-left-open-1 arrow left-arrow"></i>',
    nextArrow: '<i class="icon-right-open-1 arrow right-arrow"></i>',
    dots: true,
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
        }
    }]
});







$('body').on('click', '.origin-room', function(e){
    $('.search-sections-part').attr('style', 'margin-top:-62px');
    $('.search-sections-part').toggleClass('d-none');
    $('.form-control-custom').focus();
    // $.get(baseUrl+'/get/airports?q=', function(res){
    //     let li = '';
    //     $('.deletable-li').addClass('d-none');
    //     if(!res.length){

    //     }
    //     $.each(res, function(index, data){
    //         if(data.airport_name.length > 40){
    //             var airport_name = data.airport_name.substring(0, 40) + '..';
    //         }else{
    //             var airport_name = data.airport_name;
    //         }

    //         li += `<li class="clicker">
    //             <a href="#">
    //                 <div class="d-flex justify-content-between w-100">
    //                     <div class="d-flex">
    //                         <div class="icon">
    //                             <span class="fa-solid fa-plane-departure"></span>
    //                         </div>
    //                         <div class="text ms-3">
    //                             <h5 class="city_name">${data.area}</h5>
    //                             <p class="airport_name">${airport_name}</p>
    //                         </div>
    //                     </div>
    //                     <div class="code airport_code"> ${data.port_code} </div>
    //                 </div>
    //             </a>
    //         </li>`;
    //     });
    //     $('.appender-class').html(li);
    // });
    
});