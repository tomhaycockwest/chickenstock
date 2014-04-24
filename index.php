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
						<div class="title">Chicken</div>
						<ul class="item-list">
							<li class="item">
								<div class="item-container">	
									<div class="name">Broilers &lt; 1,150g</div>
									<div id="price1150g" class="price decrease"></div>
								</div>
							</li>
							<li class="item">
								<div class="item-container">	
									<div class="name">Broilers 1,150g &lt; 1,350g</div>
									<div id="price1150g1350g" class="price decrease"></div>
								</div>
							</li>
							<li class="item">
								<div class="item-container">	
									<div class="name">Broilers 1,350g &lt; 1,550g</div>
									<div id="price1350g1550g" class="price increase"></div>
								</div>
							</li>
							<li class="item">
								<div class="item-container">	
									<div class="name">Broilers 1,550g &lt; 2,050g</div>
									<div id="price1550g2050g" class="price increase"></div>
								</div>
							</li>
							<li class="item">
								<div class="item-container">	
									<div class="name">Roasters 2,050g &lt; 2,450g</div>
									<div id="price2050g2450g" class="price decrease"></div>
								</div>
							</li>
							<li class="item">
								<div class="item-container">	
									<div class="name">Roasters &gt; 2,450g</div>
									<div id="price2450g" class="price decrease"></div>
								</div>
							</li>
							<li class="item">
								<div class="item-container">	
									<div class="name">Skinless Breast Fillets</div>
									<div id="pricebreast" class="price increase"></div>
								</div>
							</li>
						</ul>
					</div>
					<div class="col-lg-3 column">
						<div class="title">Turkey</div>
						<ul class="item-list">
							<li class="item">
								<div class="item-container">	
									<div class="name">&lt; 7.25kg</div>
									<div id="price725kg" class="price decrease"></div>
								</div>
							</li>
							<li class="item">
								<div class="item-container">	
									<div class="name">7.25kg &gt; 9kg</div>
									<div id="price725kg9kg" class="price decrease"></div>
								</div>
							</li>
							<li class="item">
								<div class="item-container">	
									<div class="name">&gt; 9kg</div>
									<div id="9kg" class="price increase"></div>
								</div>
							</li>
						</ul>
					</div>
					<div class="col-lg-3 column">
						<div class="title">Duckling</div>
						<ul class="item-list">
							<li class="item">
								<div class="item-container">	
									<div class="name">All Weights</div>
									<div id="priceduckling" class="price decrease">&pound;6.59</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="col-lg-3 column">
						<div class="title">Goose</div>
						<ul class="item-list">
							<li class="item">
								<div class="item-container">	
									<div class="name">All Weights</div>
									<div id="pricegoose" class="price decrease">&pound;6.59</div>


								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<?php include 'footer.php'; ?>
	</body>
</html>