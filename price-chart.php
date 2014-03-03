<?php include 'header.php'; ?>

<body>
	<div id="wrapper">
		<?php include 'nav.php' ?>
		<div class="sub-nav">
			<ul id="sub-nav-items">
				<li>
					Chicken
				</li>
				<li>
					Turkey
				</li>
				<li>
					Duckling
				</li>
				<li>
					Goose
				</li>
			</ul>
		</div>
		<div class="container">
			<div class="controls">
				<div class="btn-group">
				  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
				    Broilers &gt; 1,150g</span>
				  </button>
				  <ul class="dropdown-menu" role="menu">
				    <li><a href="#">Broilers 1,150g &lt; 1,350g</a></li>
				    <li><a href="#">Broilers 1,350g &lt; 1,550g</a></li>
				    <li><a href="#">Broilers 1,550g &lt; 2,000g</a></li>
				  </ul>
				</div>


				<div class="btn-group">
				  <button type="button" class="btn btn-default active">Fresh</button>
				  <button type="button" class="btn btn-default">Frozen</button>
				</div>

				<div class="btn-group">
				  <button type="button" class="btn btn-default">1m</button>
				  <button type="button" class="btn btn-default">3m</button>
				  <button type="button" class="btn btn-default">6m</button>
				  <button type="button" class="btn btn-default">1y</button>
				  <button type="button" class="btn btn-default">2y</button>
				  <button type="button" class="btn btn-default">5y</button>
				</div>

			</div>

		</div>
	</div>
	<?php include 'footer.php'; ?>
</body>
</html>