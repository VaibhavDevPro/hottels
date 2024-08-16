<?php require_once 'includes/header.php';?>
	<section class="section-11 dark-bg-back"></section>
	<section class="section-12 py-xl-5 py-3">
		<div class="container py-xl-4 py-3">
			<div class="row">
				<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
					<div class="tab-part">
						<ul class="nav nav-tabs flex-column">
						  	<li class="nav-item">
						    	<a class="nav-link active" data-bs-toggle="tab" href="#manage-profile" title="Manage profile"><span class="icon-account-circle-user-profile pe-2"></span>Manage profile</a>
						  	</li>
						  	<li class="nav-item">
						    	<a class="nav-link" data-bs-toggle="tab" href="#my-bookings" title="My Bookings"><span class="icon-my-booking-profile pe-2"></span>My Bookings</a>
						  	</li>
						  	<li class="nav-item">
						    	<a class="nav-link" data-bs-toggle="tab" href="#saved-hotels" title="Saved Hotels"><span class="icon-heart pe-2"></span>Saved Hotels</a>
						  	</li>
						  	<li class="nav-item">
						    	<a class="nav-link" data-bs-toggle="tab" href="#co-travellers"  title="Master List"><span class="icon-master-list-profile pe-2"></span>Co-Travellers</a>
						  	</li>
						  	<li class="nav-item">
						    	<a class="nav-link" data-bs-toggle="tab" href="#payment-details" title="Payment Details"><span class="icon-payment-details-profile pe-2"></span>Payment Details</a>
						  	</li>
						  	<li class="nav-item">
						    	<a class="nav-link" data-bs-toggle="tab" href="#help" title="24x7 Help"><span class="icon-help-profile pe-2"></span>24x7 Help</a>
						  	</li>
						</ul>
					</div>
				</div>
				<div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-9 mt-xl-0 mt-lg-0 mt-3">
					<div class="tab-content">
						<div class="tab-pane active" id="manage-profile">
							<?php require_once 'manage-profile.php';?>
						</div>
						<div class="tab-pane" id="my-bookings">
							<?php require_once 'my-bookings.php';?>
						</div>
						<div class="tab-pane" id="saved-hotels">
							<?php require_once 'saved-hotels.php';?>
						</div>
						<div class="tab-pane" id="co-travellers">
							<?php require_once 'co-travellers.php';?>
						</div>
						<div class="tab-pane " id="payment-details">
							<?php require_once 'payment-details.php';?>
						</div>
						
						<div class="tab-pane" id="help">
							<?php require_once 'help.php';?>
						</div>
					</div>	
				</div>
			</div>
		</div>
	</section>
<?php require_once 'includes/footer.php';?>
<script type="text/javascript">
$("#saveBtnOne").click(function(){
    $('#no-card').addClass('d-none');
    $('#add-card').removeClass('d-none');
   
});
$("#saveBtn").click(function(){
	$('#no-card').addClass('d-none');
    $('#add-card').addClass('d-none');
    $('#show-card-list').removeClass('d-none');
});
$("#show-table").click(function(){
	$('#no-card').addClass('d-none');
    $('#add-card').removeClass('d-none');
    $('#show-card-list').addClass('d-none');
});


$("#saveBtnOne-1").click(function(){
    $('#no-card-1').addClass('d-none');
    $('#add-card-1').removeClass('d-none');
   
});
$("#saveBtn-1").click(function(){
	$('#no-card-1').addClass('d-none');
    $('#add-card-1').addClass('d-none');
    $('#show-card-list-1').removeClass('d-none');
});
$("#show-table-1").click(function(){
	$('#no-card-1').addClass('d-none');
    $('#add-card-1').removeClass('d-none');
    $('#show-card-list-1').addClass('d-none');
});


</script>

