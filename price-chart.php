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
			    <li id="chickenGraph" class="sub-nav-item active"><a href="#">Chicken</a></li>
			    <li id="turkeyGraph" class="sub-nav-item"><a  href="#">Turkey</a></li>  
			    <li id="ducklingGraph" class="sub-nav-item"><a href="#">Duckling</a></li>
			    <li id="gooseGraph" class="sub-nav-item"><a href="#">Goose</a></li>
			</ul>
		</div>
		<div class="container">
			<?php include 'about.php'; ?>
			<div class="controls">
				<div class="weight dropdown active-dropdown" id="chickenDropdown">
				 	<button type="button" class="btn btn-default dropdown-toggle form-control" data-toggle="dropdown">
						<span data-bind="label">Broilers &lt; 1,150g</span>
					</button>
					<ul class="dropdown-menu" role="menu">
						<li><a id="b1150g" href="#">Broilers &lt; 1,150g</a></li>
						<li><a id="b1150g1350g" href="#">Broilers 1,150g &lt; 1,350g</a></li>
						<li><a id="b1350g1550g" href="#">Broilers 1,350g &lt; 1,550g</a></li>
						<li><a id="b1550g2050g" href="#">Broilers 1,550g &lt; 2,050g</a></li>
						<li><a id="r2050g2450g" href="#">Roasters 2,050g &lt; 2,450g</a></li>
						<li><a id="r2450g" href="#">Roasters &gt; 2,450g</a></li>
						<li><a id="breast" href="#">Skinless Breast Fillets</a></li>
					</ul>
				</div>

				<div class="weight dropdown" id="turkeyDropdown">
				 	<button type="button" class="btn btn-default dropdown-toggle form-control" data-toggle="dropdown">
						<span data-bind="label">&lt; 7.25kg</span>
					</button>
					<ul class="dropdown-menu" role="menu">
						<li><a id="725kg" href="#">&lt; 7.25kg</a></li>
						<li><a id="725kg9kg" href="#">7.25kg &gt; 9kg</a></li>
						<li><a id="9kg" href="#">&gt; 9kg</a></li>
						<li><a id="ducklingWeight" href="#">All Weights</a></li>
						<li><a id="gooseWeight" href="#">All Weights</a></li>
					</ul>
				</div>

				<div class="weight dropdown" id="ducklingDropdown">
				 	<button type="button" class="btn btn-default dropdown-toggle form-control" data-toggle="dropdown">
						<span data-bind="label">All Weights</span>
					</button>
					<ul class="dropdown-menu" role="menu">
						<li><a id="ducklingWeight" href="#">All Weights</a></li>
					</ul>
				</div>

				<div class="weight dropdown" id="gooseDropdown">
				 	<button type="button" class="btn btn-default dropdown-toggle form-control" data-toggle="dropdown">
						<span data-bind="label">All Weights</span>
					</button>
					<ul class="dropdown-menu" role="menu">
						<li><a id="gooseWeight" href="#">All Weights</a></li>
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