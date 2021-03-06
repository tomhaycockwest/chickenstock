<?php include 'header.php'; ?>

	<body>
		<div id="wrapper">
			<div class="nav">
				<a href="index.php"><img id="logo" src="img/logo.png"></a>
				<ul id="nav-items">
					<li>
						<a href="index.php"><img src="img/overview-selected.png"></a>
					</li>
					<li>
						<a href="price-chart.php"><img src="img/price-chart.png"></a>
					</li>
					<li class="about-link">
						<a id="aboutClick" href="#"><img src="img/about.png"></a>
					</li>
				</ul>
			</div>
			<div class="container">
				<?php include 'about.php'; ?>
				<div class="row">
					<div id="chicken">
						<div class="col-lg-3 column">
							<div class="title">Chicken</div>
							<ul class="item-list">
								<li class="item">
									<div class="item-container">	
									<div class="name">Broilers &lt; 1,150g</div>
									<div id="freshprice1150g" class="fresh-price"></div>
									<div id="frozenprice1150g" class="frozen-price"></div>
									<div class="fresh-label">Fresh</div>
									<div class="frozen-label">Frozen</div>
									</div>
								</li>
								<li class="item">
									<div class="item-container">	
										<div class="name">Broilers 1,150g &lt; 1,350g</div>
										<div id="freshprice1150g1350g" class="fresh-price"></div>
										<div id="frozenprice1150g1350g" class="frozen-price"></div>
										<div class="fresh-label">Fresh</div>
										<div class="frozen-label">Frozen</div>
									</div>
								</li>
								<li class="item">
									<div class="item-container">	
										<div class="name">Broilers 1,350g &lt; 1,550g</div>
										<div id="freshprice1350g1550g" class="fresh-price"></div>
										<div id="frozenprice1350g1550g" class="frozen-price"></div>
										<div class="fresh-label">Fresh</div>
										<div class="frozen-label">Frozen</div>
									</div>
								</li>
								<li class="item">
									<div class="item-container">	
										<div class="name">Broilers 1,550g &lt; 2,050g</div>
										<div id="freshprice1550g2050g" class="fresh-price"></div>
										<div id="frozenprice1550g2050g" class="frozen-price"></div>
										<div class="fresh-label">Fresh</div>
										<div class="frozen-label">Frozen</div>
									</div>
								</li>
								<li class="item">
									<div class="item-container">	
										<div class="name">Roasters 2,050g &lt; 2,450g</div>
										<div id="freshprice2050g2450g" class="fresh-price"></div>
										<div id="frozenprice2050g2450g" class="frozen-price"></div>
										<div class="fresh-label">Fresh</div>
										<div class="frozen-label">Frozen</div>
									</div>
								</li>
								<li class="item">
									<div class="item-container">	
										<div class="name">Roasters &gt; 2,450g</div>
										<div id="freshprice2450g" class="fresh-price"></div>
										<div id="frozenprice2450g" class="frozen-price"></div>
										<div class="fresh-label">Fresh</div>
										<div class="frozen-label">Frozen</div>
									</div>
								</li>
								<li class="item">
									<div class="item-container">	
										<div class="name">Skinless Breast Fillets</div>
										<div id="freshpricebreast" class="fresh-price"></div>
										<div id="frozenpricebreast" class="frozen-price"></div>
										<div class="fresh-label">Fresh</div>
										<div class="frozen-label">Frozen</div>
									</div>
								</li>
							</ul>
						</div>
				</div>

				</div>
				<?php include 'mobile-nav.php'; ?>
			</div>
		</div>
		<?php include 'footer.php'; ?>
	</body>
</html>