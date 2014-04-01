<?php include 'header.php'; ?>
	<body>
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
						<div class="title">Duckling</div>
						<ul class="item-list">
							<li class="item">
								<div class="item-container">	
									<div class="name">Broilers</div>
									<div class="weight">1,150g</div>
									<div class="price decrease">&pound;6.59</div>
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