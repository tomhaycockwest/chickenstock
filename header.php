<!DOCTYPE html>

<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Chicken Stock</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <link rel="apple-touch-icon" href="img/app-icon.png" />
    <link rel="shortcut icon" href="img/favicon.ico">
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>

   <script type="text/javascript">

     if(("standalone" in window.navigator) && window.navigator.standalone){

     var noddy, remotes = false;

     document.addEventListener('click', function(event) {

     noddy = event.target;

     while(noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
     noddy = noddy.parentNode;
     }

     if('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes))
     {
     event.preventDefault();
     document.location.href = noddy.href;
     }

     },false);
     }

     $(document).ready(function(){


     $('.option').click(function() {
     		var page = $(this).attr('href');
     		$('.row').load(page);
            setTimeout(function(){updatePrices();}, 500);
     		return false;
     	});
     });
     </script>

    <link rel="stylesheet" href="stylesheets/style.css">
</head>