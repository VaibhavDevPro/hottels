<?php require_once 'includes/header.php'; ?>
<div class="search-details-page">
	<section class="section-1 lazy d-flex align-items-center bg-image-style" data-bg="images/search-result.png">
	</section>

	<section class="search-section">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="tab-content">
						<div class="tab-pane active" id="home">
							<form>
								<div class="row g-0">
									<div class="col-3 repeat-section">
										<div class="search-item">
											<label for="exampleInputEmail1" class="form-label">City / Location</label>
											<h4 class="section-hotel">Panjim, Goa</h4>
											<input type="email" class="form-control d-none" id="exampleInputEmail1" aria-describedby="emailHelp">
										</div>
									</div>
									<div class="col-2 repeat-section">
										<div class="search-item">
											<label for="exampleInputEmail1" class="form-label">Check In</label>
											<h4 class="section-hotel">August 12, 2024</h4>
											<input type="email" class="form-control d-none" id="exampleInputEmail1" aria-describedby="emailHelp">
										</div>
									</div>
									<div class="col-2 repeat-section">
										<div class="search-item">
											<label for="exampleInputEmail1" class="form-label">Check out</label>
											<h4 class="section-hotel">August 28, 2024</h4>
											<input type="email" class="form-control d-none" id="exampleInputEmail1" aria-describedby="emailHelp">
										</div>
									</div>
									<div class="col-2 repeat-section">
										<div class="search-item">
											<label for="exampleInputEmail1" class="form-label">Rooms & Guests</label>
											<h4 class="section-hotel">1 Room, 2 Adults</h4>
											<input type="email" class="form-control d-none" id="exampleInputEmail1" aria-describedby="emailHelp">
										</div>
									</div>
									<div class="col-2 repeat-section">
										<div class="search-item">
											<label for="exampleInputEmail1" class="form-label">Price per night</label>
											<h4 class="section-hotel">₹1500-₹2500</h4>
											<input type="email" class="form-control d-none" id="exampleInputEmail1" aria-describedby="emailHelp">
										</div>
									</div>
									<div class="col-1 repeat-section">
										<div class="search-item">
											<button class="btn btn-outline-primary d-flex" title="Search"><span class="icon-search-1 pe-2"></span>Search</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="seach-results">
		<div class="row">
			<div class="col-md-3">
				<div class="seach-results-left">
					<div class="select-filter">
						<h5>Select Filters</h5>
						<div class="map">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.954671015365!2d81.00554317602152!3d26.841394013150627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be301f7b7b893%3A0x23d0b9cb472775ac!2sOmmune!5e0!3m2!1sen!2sin!4v1722063889175!5m2!1sen!2sin" height="160" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
							<button>
								View in Map
							</button>
						</div>
					</div>

					<div class="section-rest-filter">
						<div class="popular-filters">
							<h5>
								Popular filters
							</h5>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="star-three">
									<label class="form-check-label" for="free_cancellation">
										Free cancellation
									</label>
								</div>
								<span>
									527
								</span>
							</div>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="star_rating">
									<label class="form-check-label" for="star_rating">
										4 stars
									</label>
								</div>
								<span>
									46
								</span>
							</div>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" checked id="family_rooms">
									<label class="form-check-label" for="family_rooms">
										Family rooms
									</label>
								</div>
								<span>
									440
								</span>
							</div>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" checked value="" id="breakfast_included">
									<label class="form-check-label" for="breakfast_included">
										Breakfast included
									</label>
								</div>
								<span>
									246
								</span>
							</div>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" checked value="" id="hotels">
									<label class="form-check-label" for="hotels">
										Hotels
									</label>
								</div>
								<span>
									346
								</span>
							</div>
						</div>
						<div class="price-ranges">
							<h5>
								Price Range
							</h5>
							<div class="wrapper">
								<div class="price-container mb-0">
									<div class="slider-track"></div>
									<input type="range" class="price-range" min="1000" max="25000" value="4000" id="slider-1" oninput="slideOne()">
									<input type="range" class="price-range" min="1000" max="25000" value="20000" id="slider-2" oninput="slideTwo()">
								</div>
								<div class="values d-flex justify-content-between  mb-3 fw-bold fs-7">
									<span id="range1">
										1,000
									</span>
									<span id="range2">
										25,000
									</span>
								</div>
							</div>
						</div>
						<div class="star-category">
							<h5>
								Star Category
							</h5>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="star-four">
									<label class="form-check-label" for="star-four">
										4 Star
									</label>
								</div>
								<span>
									527
								</span>
							</div>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="star-three">
									<label class="form-check-label" for="star-three">
										3 Star
									</label>
								</div>
								<span>
									527
								</span>
							</div>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="three_star_plus">
									<label class="form-check-label" for="three_star_plus">
										3+ Star
									</label>
								</div>
								<span>
									527
								</span>
							</div>
						</div>
						<div class="reservation-policy">
							<h5>
								Reservation Policy
							</h5>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="free_cancel">
									<label class="form-check-label" for="free_cancel">
										Free cancellation
									</label>
								</div>
								<span>
									527
								</span>
							</div>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="without_card">
									<label class="form-check-label" for="without_card">
										Book without credit card
									</label>
								</div>
								<span>
									527
								</span>
							</div>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="no_prepayment">
									<label class="form-check-label" for="no_prepayment">
										No prepayment
									</label>
								</div>
								<span>
									527
								</span>
							</div>
						</div>
						<div class="facilities">
							<h5>
								Facilities
							</h5>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" checked value="" id="free_wifi">
									<label class="form-check-label" for="free_wifi">
										Free WiFi
									</label>
								</div>
								<span>
									527
								</span>
							</div>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" checked value="" id="family_room">
									<label class="form-check-label" for="family_room">
										Family rooms
									</label>
								</div>
								<span>
									527
								</span>
							</div>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" checked value="" id="parking">
									<label class="form-check-label" for="parking">
										Parking
									</label>
								</div>
								<span>
									527
								</span>
							</div>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" checked value="" id="private_pool">
									<label class="form-check-label" for="private_pool">
										Private pool
									</label>
								</div>
								<span>
									527
								</span>
							</div>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" checked value="" id="kitchen">
									<label class="form-check-label" for="kitchen">
										Kitchen
									</label>
								</div>
								<span>
									527
								</span>
							</div>
						</div>
						<div class="bed-preference">
							<h5>
								Bed preference
							</h5>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="Twin Beds">
									<label class="form-check-label" for="Twin Beds">
										Twin beds
									</label>
								</div>
								<span>
									527
								</span>
							</div>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="double_bed">
									<label class="form-check-label" for="double_bed">
										Double bed
									</label>
								</div>
								<span>
									527
								</span>
							</div>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="king_sized_bed">
									<label class="form-check-label" for="king_sized_bed">
										King sized bed
									</label>
								</div>
								<span>
									527
								</span>
							</div>
							<div class="check-seach">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="queen_sized_bed">
									<label class="form-check-label" for="queen_sized_bed">
										Queen sized bed
									</label>
								</div>
								<span>
									527
								</span>
							</div>
						</div>
					</div>

				</div>
			</div>
			<div class="col-md-9">
				<div class="search-results-right">
					<div class="top-box">
						<div class="top-box-left">
							<h6>Panaji, Goa</h6>
							<p>300+ properties found</p>
						</div>
						<div class="top-box-right">
							<div class="dropdown">
								<input type="checkbox" class="dropdown__switch" id="filter-switch" hidden />
								<label for="filter-switch" class="dropdown__options-filter">
									<ul class="dropdown__filter" role="listbox" tabindex="-1">
										<li class="dropdown__filter-selected" aria-selected="true">
											Most Popular
										</li>
										<li>
											<ul class="dropdown__select">
												<li class="dropdown__select-option" role="option">
													Option 1
												</li>
												<li class="dropdown__select-option" role="option">
													Option 2
												</li>
												<li class="dropdown__select-option" role="option">
													Option 3
												</li>
												<li class="dropdown__select-option" role="option">
													Option 4
												</li>
												<li class="dropdown__select-option" role="option">
													Option 5
												</li>
											</ul>
										</li>
									</ul>
								</label>
							</div>

							<div class="form-group">
								<input type="text" class="form-control" placeholder="Search by property name">
								<i class="bi bi-search"></i>
							</div>
						</div>
					</div>

					<div class="result-box">
						<div class="result-box-container">
							<div class="result-box-container-left">
								<img src="./images/hotel.png" alt="">
							</div>
							<div class="result-box-container-right">
								<div class="content">
									<h6>Fairfield by Marriott Goa Calangute</h6>
									<span class="location">Calangute, Goa</span>
									<div class="facilities">
										<div class="facilities-box">
											<img src="./images/pool.svg" alt="">
											<span>Swimming Pool</span>
										</div>
										<div class="facilities-box">
											<img src="./images/restaurant.svg" alt="">
											<span>Restaurantl</span>
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
										<span class="parking">P</span>
										<div class="star-rating">
											<img src="./images/grade.svg" alt="">
											<p>3 Star Hotel</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
<?php
require_once 'includes/footer.php';
?>