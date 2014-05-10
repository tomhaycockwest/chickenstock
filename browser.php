<?php
$iphone = strpos($_SERVER['HTTP_USER_AGENT'],"iPhone");
$android = strpos($_SERVER['HTTP_USER_AGENT'],"Android" && "Mobile");
$palmpre = strpos($_SERVER['HTTP_USER_AGENT'],"webOS");
$berry = strpos($_SERVER['HTTP_USER_AGENT'],"BlackBerry");
$ipod = strpos($_SERVER['HTTP_USER_AGENT'],"iPod");
$windowsPhone = strpos($_SERVER['HTTP_USER_AGENT'],"phone");
$ipad = strpos($_SERVER['HTTP_USER_AGENT'],"iPad");
$androidTablet = strpos($_SERVER['HTTP_USER_AGENT'],"Android");


if ($iphone || $android || $palmpre || $ipod || $windowsPhone || $berry == true) 
{ 
header('http://chickenstockapp.com/index-mobile.php');
//OR
echo "<script>window.location='http://chickenstockapp.com/index-mobile.php'</script>";
}


if ($ipad || $androidTablet == true) 
{ 
header('http://chickenstockapp.com/index-tablet.php');
//OR
echo "<script>window.location='http://chickenstockapp.com/index-tablet.php'</script>";
}
?>