<?php
	header('Access-Control-Allow-Origin: *');
	// The following code runs the map.scss and compiles the scss files into the main file.
	use ScssPhp\ScssPhp\Compiler;
	require 'vendors/scssphp-master/scss.inc.php';

	$scss = new Compiler();
	$scss->setFormatter('ScssPhp\ScssPhp\Formatter\Crunched');

	// To stop generating css, comment out the next line.
	file_put_contents('css/style.min.css', $scss->compile('@import "css/scss/map.scss";'));

	$fileName =  basename($_SERVER['PHP_SELF']);
?>

<!DOCTYPE html>
<html class="no-js" lang="en_AU" />
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title><?php echo (!empty($title)) ? 'Title-'.$title: 'Home'; ?></title>
	<meta name="description" content="" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no" />

	<meta name="HandheldFriendly" content="True" />
	<meta name="pinterest" content="nopin" />
	<link rel="stylesheet" type="text/css" href="css/flatpickr.min.css" />
	<link rel="stylesheet" type="text/css" href="css/select2.min.css"/>
	<link rel="stylesheet" type="text/css" href="css/lightbox.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/style.min.css?v=<?php echo rand(1111,9999); ?>" />
	<link rel="shortcut icon" type="image/x-icon" href="#" />
</head>
<body data-instant-intensity="mousedown">
<header>
	<nav class="navbar navbar-expand-xl" id="navbar">
		<div class="container">
			<a class="navbar-brand" href="index.php">
				<img class="d-none" src="images/header-logo.png" alt="Logo" width="auto" id="black-logo" />
				<img class="" src="images/white-logo.svg" alt="Logo" width="auto" id="white-logo" />
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
				<i class="icon-menu"></i>
			</button>
			<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
				<div class="offcanvas-header">
					<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div class="offcanvas-body">			    
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="index.php">Home</a>
						</li>					
						<li class="nav-item">
							<a class="nav-link" href="#" title="Destinations">Destinations</a>						 
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" title="Consult Now">Consult Now</a>
						</li>
					</ul>
					<div class="contact-us">
						<a class="btn btn-outline-primary d-none" id="login" href="#" title="Login">
							Login
						</a>
						<a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							<div class="d-flex align-items-center">
								<div class="icon">
									<span>S</span>
								</div>
								<div class="name ps-2">
									Santosh Singh
								</div>
							</div>
						</a>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						    <li><a class="dropdown-item" href="profile.php"><span class="icon-account-circle-user-profile pe-2"></span>Manage profile</a></li>
						    <li><a class="dropdown-item" href="#" title="Sign Out" id="logout"><span class="icon-login-flight pe-2"></span>Log out</a></li>
						</ul>
					</div>
				</div>			
			</div>
		</div>
	</nav>
</header>



