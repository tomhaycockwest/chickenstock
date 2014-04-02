<?php include 'header.php'; ?>
	<body id="chicken">
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
				<div class="row"></div>
					<?php include 'mobile-nav.php'; ?>
			</div>
		</div>
		<?php include 'footer.php'; ?>
	</body>
</html>