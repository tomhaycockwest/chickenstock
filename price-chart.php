<?php include 'header.php'; ?>

<body>
	<div id="wrapper">
		<div class="nav">
			<a href="index.php"><img id="logo" src="img/logo.png"></a>
			<ul id="nav-items">
				<li>
					<a href="index.php"><img src="img/Overview.png"></a>
				</li>
				<li>
					<a href="price-chart.php"><img src="img/price-chart-selected.png"></a>
				</li>
				<li class="about-link">
					<a id="aboutClick" href="#"><img src="img/About.png"></a>
				</li>
			</ul>
		</div>
		<div class="sub-nav">
			<ul id="sub-nav-items">
			    <li class="sub-nav-item active"><a href="#">Chicken</a></li>
			    <li class="sub-nav-item"><a href="#">Turkey</a></li>  
			    <li class="sub-nav-item"><a href="#">Duckling</a></li>
			    <li class="sub-nav-item"><a href="#">Goose</a></li>
			</ul>
		</div>
		<div class="container">
			<?php include 'about.php'; ?>
			<div class="controls">
				<div class="weight">
				  <button type="button" class="btn btn-default dropdown-toggle form-control" data-toggle="dropdown">
				    <span data-bind="label">Broilers &gt; 1,150g</span>
				  </button>
				  <ul class="dropdown-menu" role="menu">
				  	<li><a href="#">Broilers &gt; 1,150g</a></li>
				    <li><a href="#">Broilers 1,150g &lt; 1,350g</a></li>
				    <li><a href="#">Broilers 1,350g &lt; 1,550g</a></li>
				    <li><a href="#">Broilers 1,550g &lt; 2,000g</a></li>
				  </ul>
				</div>

				<div class="fresh-frozen">
				  <button type="button" id="fresh" class="btn btn-default active option">Fresh</button>
				  <button type="button" id="frozen" value ="replot" class="btn btn-default option">Frozen</button>
				</div>
			</div>

			<div class="graph-container">
				<div id="graph" style="width:1300px; height:700px"></div>
			</div>

		</div>
	</div>
	<?php include 'footer.php'; ?>
</body>
</html>