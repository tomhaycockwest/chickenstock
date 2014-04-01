<?php include 'header.php'; ?>
	<body id="turkey">
		<div id="wrapper">
			<div class="nav">
				<a href="index.php"><img id="logo" src="img/logo.png"></a>
				<ul id="nav-items">
					<li>
						<a href="index.php"><img src="img/Overview-selected.png"></a>
					</li>
					<li>
						<a href="price-chart.php"><img src="img/price-chart.png"></a>
					</li>
					<li class="about-link">
						<a id="aboutClick" href="#"><img src="img/About.png"></a>
					</li>
				</ul>
			</div>
			<div class="container">
				<?php include 'about.php'; ?>
				<div class="row">
					<div class="col-lg-3 column">
						<div class="title">Turkey</div>
						<ul class="item-list">
							<li class="item">
								<div class="item-container">	
									<div class="name">Broilers</div>
									<div class="weight">1,150g</div>
									<div class="price decrease">&pound;6.59</div>
								</div>
							</li>
							<li class="item">
								<div class="item-container">	
									<div class="name">Broilers</div>
									<div class="weight">1,150g &lt; 1,350g</div>
									<div class="price decrease">&pound;2.30</div>
								</div>
							</li>
							<li class="item">
								<div class="item-container">	
									<div class="name">Broilers</div>
									<div class="weight">1,350g &lt; 1,550g</div>
									<div class="price increase">&pound;7.11</div>
								</div>
							</li>
							<li class="item">
								<div class="item-container">	
									<div class="name">Broilers</div>
									<div class="weight">1,150g &lt; 2,050g</div>
									<div class="price increase">&pound;3.89</div>
								</div>
							</li>
						</ul>
					</div>

					<?php include 'mobile-nav.php'; ?>
				</div>
			</div>
		</div>
		<?php include 'footer.php'; ?>
	</body>
</html>