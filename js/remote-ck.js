// load in csv file
// var prices = "http://staging.chickenstockapp.com/test.csv";
function loadPrices(){$.ajax({url:"test.csv",async:!1,success:function(e){csv_as_array=$.csv.toArrays(e)},dataType:"text"})}function isANumber(e){return isNaN(e)===!1?e:0}function updatePrices(){$("#freshprice1150g").text(csv_as_array[csv_as_array.length-1][3]);$("#frozenprice1150g").text(csv_as_array[csv_as_array.length-1][20]);$("#freshprice1150g1350g").text(csv_as_array[csv_as_array.length-1][4]);$("#frozenprice1150g1350g").text(csv_as_array[csv_as_array.length-1][21]);$("#freshprice1350g1550g").text(csv_as_array[csv_as_array.length-1][5]);$("#frozenprice1350g1550g").text(csv_as_array[csv_as_array.length-1][22]);$("#freshprice1550g2050g").text(csv_as_array[csv_as_array.length-1][6]);$("#frozenprice1550g2050g").text(csv_as_array[csv_as_array.length-1][23]);$("#freshprice2050g2450g").text(csv_as_array[csv_as_array.length-1][7]);$("#frozenprice2050g2450g").text(csv_as_array[csv_as_array.length-1][24]);$("#freshprice2450g").text(csv_as_array[csv_as_array.length-1][8]);$("#frozenprice2450g").text(csv_as_array[csv_as_array.length-1][25]);$("#freshpricebreast").text(csv_as_array[csv_as_array.length-1][9]);$("#frozenpricebreast").text(csv_as_array[csv_as_array.length-1][26]);$("#freshprice725kg").text(csv_as_array[csv_as_array.length-1][12]);$("#frozenprice725kg").text(csv_as_array[csv_as_array.length-1][29]);$("#freshprice725kg9kg").text(csv_as_array[csv_as_array.length-1][13]);$("#frozenprice725kg9kg").text(csv_as_array[csv_as_array.length-1][30]);$("#freshprice9kg").text(csv_as_array[csv_as_array.length-1][14]);$("#frozenprice9kg").text(csv_as_array[csv_as_array.length-1][31]);$("#freshpriceduckling").text(csv_as_array[csv_as_array.length-1][16]);$("#frozenpriceduckling").text(csv_as_array[csv_as_array.length-1][33]);$("#freshpricegoose").text(csv_as_array[csv_as_array.length-1][18]);$("#frozenpricegoose").text(csv_as_array[csv_as_array.length-1][35]);csv_as_array[csv_as_array.length-1][3]>csv_as_array[csv_as_array.length-2][3]?$("#freshprice1150g").addClass("increase"):$("#freshprice1150g").addClass("decrease");csv_as_array[csv_as_array.length-1][20]>csv_as_array[csv_as_array.length-2][20]?$("#frozenprice1150g").addClass("increase"):$("#frozenprice1150g").addClass("decrease");csv_as_array[csv_as_array.length-1][4]>csv_as_array[csv_as_array.length-2][4]?$("#freshprice1150g1350g").addClass("increase"):$("#freshprice1150g1350g").addClass("decrease");csv_as_array[csv_as_array.length-1][21]>csv_as_array[csv_as_array.length-2][21]?$("#frozenprice1150g1350g").addClass("increase"):$("#frozenprice1150g1350g").addClass("decrease");csv_as_array[csv_as_array.length-1][5]>csv_as_array[csv_as_array.length-2][5]?$("#freshprice1350g1550g").addClass("increase"):$("#freshprice1350g1550g").addClass("decrease");csv_as_array[csv_as_array.length-1][22]>csv_as_array[csv_as_array.length-2][22]?$("#frozenprice1350g1550g").addClass("increase"):$("#frozenprice1350g1550g").addClass("decrease");csv_as_array[csv_as_array.length-1][6]>csv_as_array[csv_as_array.length-2][6]?$("#freshprice1550g2050g").addClass("increase"):$("#freshprice1550g2050g").addClass("decrease");csv_as_array[csv_as_array.length-1][23]>csv_as_array[csv_as_array.length-2][23]?$("#frozenprice1550g2050g").addClass("increase"):$("#frozenprice1550g2050g").addClass("decrease");csv_as_array[csv_as_array.length-1][7]>csv_as_array[csv_as_array.length-2][7]?$("#freshprice2050g2450g").addClass("increase"):$("#freshprice2050g2450g").addClass("decrease");csv_as_array[csv_as_array.length-1][24]>csv_as_array[csv_as_array.length-2][24]?$("#frozenprice2050g2450g").addClass("increase"):$("#frozenprice2050g2450g").addClass("decrease");csv_as_array[csv_as_array.length-1][8]>csv_as_array[csv_as_array.length-2][8]?$("#freshprice2450g").addClass("increase"):$("#freshprice2450g").addClass("decrease");csv_as_array[csv_as_array.length-1][25]>csv_as_array[csv_as_array.length-2][25]?$("#frozenprice2450g").addClass("increase"):$("#frozenprice2450g").addClass("decrease");csv_as_array[csv_as_array.length-1][9]>csv_as_array[csv_as_array.length-2][9]?$("#freshpricebreast").addClass("increase"):$("#freshpricebreast").addClass("decrease");csv_as_array[csv_as_array.length-1][26]>csv_as_array[csv_as_array.length-2][26]?$("#frozenpricebreast").addClass("increase"):$("#frozenpricebreast").addClass("decrease");csv_as_array[csv_as_array.length-1][12]>csv_as_array[csv_as_array.length-2][12]?$("#freshprice725kg").addClass("increase"):$("#freshprice725kg").addClass("decrease");csv_as_array[csv_as_array.length-1][29]>csv_as_array[csv_as_array.length-2][29]?$("#frozenprice725kg").addClass("increase"):$("#frozenprice1150g").addClass("decrease");csv_as_array[csv_as_array.length-1][13]>csv_as_array[csv_as_array.length-2][13]?$("#freshprice725kg9kg").addClass("increase"):$("#freshprice725kg9kg").addClass("decrease");csv_as_array[csv_as_array.length-1][30]>csv_as_array[csv_as_array.length-2][30]?$("#frozenprice725kg9kg").addClass("increase"):$("#frozenprice725kg9kg").addClass("decrease");csv_as_array[csv_as_array.length-1][14]>csv_as_array[csv_as_array.length-2][14]?$("#freshprice9kg").addClass("increase"):$("#freshprice9kg").addClass("decrease");csv_as_array[csv_as_array.length-1][31]>csv_as_array[csv_as_array.length-2][31]?$("#frozenprice9kg").addClass("increase"):$("#frozenprice9kg").addClass("decrease");csv_as_array[csv_as_array.length-1][16]>csv_as_array[csv_as_array.length-2][16]?$("#freshpriceduckling").addClass("increase"):$("#freshpriceduckling").addClass("decrease");csv_as_array[csv_as_array.length-1][20]>csv_as_array[csv_as_array.length-2][33]?$("#frozenpriceduckling").addClass("increase"):$("#frozenpriceduckling").addClass("decrease");csv_as_array[csv_as_array.length-1][18]>csv_as_array[csv_as_array.length-2][18]?$("#freshpricegoose").addClass("increase"):$("#freshpricegoose").addClass("decrease");csv_as_array[csv_as_array.length-1][35]>csv_as_array[csv_as_array.length-2][35]?$("#frozenpricegoose").addClass("increase"):$("#frozenpricegoose").addClass("decrease")}var csv_as_array=[];loadPrices();updatePrices();$(".option").click(function(){var e=$(this).attr("href");$(".row").load(e);setTimeout(function(){updatePrices()},500);return!1});$(document).ready(function(){function o(n){var r=0,i="",s="",o=e;switch(o){case"b1150g":i=3;s=20;break;case"b1150g1350g":i=4;s=21;break;case"b1350g1550g":i=5;s=22;break;case"b1550g2050g":i=6;s=23;break;case"r2050g2450g":i=7;s=24;break;case"r2450g":i=8;s=25;break;case"breast":i=9;s=26;break;case"725kg":i=12;s=29;break;case"725kg9kg":i=13;s=30;break;case"9kg":i=14;s=31;break;case"ducklingWeight":i=16;s=33;break;case"gooseWeight":i=18;s=35;break;default:}var u=$.map(csv_as_array,function(t){return t[r]}),a=$.map(csv_as_array,function(t){return isANumber(t[i])}),f=$.map(csv_as_array,function(t){return isANumber(t[s])}),l=[],c=[],h=0,p=52,d=new Array(p);for(var v=0;v<d.length;v++)d[v]=new Array(p);for(v=0;v<u.length;v++){var m=u[v],g=parseInt(a[v],10),y=parseInt(f[v],10);l.push(g);var b=m.split("-").join(" ");c.push(b);var w="20"+m.substr(m.length-2);if(w===n)if(t==="fresh"){d[h][0]=b.substr(0,b.length-2)+"12";d[h][1]=g;h++}else{d[h][0]=b.substr(0,b.length-2)+"12";d[h][1]=y;h++}}return d}function a(){var e=o("2012"),t=o("2013"),n=o("2014");f&&f.destroy();f=$.jqplot("graph",[n,t,e],{animate:!0,textColor:"#42454f",gridPadding:{right:35},legend:{show:!0},grid:{backgroundColor:"#28292c",gridLineColor:"#40444d",borderColor:"#28292c",shadow:!1},axes:{xaxis:{renderer:$.jqplot.DateAxisRenderer,tickOptions:{formatString:"%b"}}},highlighter:{show:!0,sizeAdjust:10},series:u});console.log("render")}function l(){u=[{label:r,color:"#bf4423",shadow:!1},{label:i,color:"#fd881b",shadow:!1},{label:s,color:"#ff0",shadow:!1}];t="fresh"}function c(){u=[{label:r,color:"#0c5888",shadow:!1},{label:i,color:"#0084d8",shadow:!1},{label:s,color:"#ff0",shadow:!1}];t="frozen"}var e="b1150g",t="fresh",n=new Date,r=n.getFullYear(),i=n.getFullYear()-1,s=n.getFullYear()-2;$(".dropdown-menu li").click(function(t){e=t.target.id;a()});$("#fresh").click(function(){l();a()});$("#frozen").click(function(){c();a()});$("#chickenGraph").click(function(){$("#chickenDropdown span").html("Broilers &lt; 1,150g");$("#chickenDropdown").addClass("active-dropdown").siblings(".dropdown").removeClass("active-dropdown");e="b1150g";a()});$("#turkeyGraph").click(function(){$("#turkeyDropdown span").html("&lt; 7.25kg");$("#turkeyDropdown").addClass("active-dropdown").siblings(".dropdown").removeClass("active-dropdown");e="725kg";a()});$("#ducklingGraph").click(function(){$("#ducklingDropdown").addClass("active-dropdown").siblings(".dropdown").removeClass("active-dropdown");e="ducklingWeight";a()});$("#gooseGraph").click(function(){$("#gooseDropdown").addClass("active-dropdown").siblings(".dropdown").removeClass("active-dropdown");e="gooseWeight";a()});var u=[{label:r,color:"#bf4423",shadow:!1},{label:i,color:"#fd881b",shadow:!1},{label:s,color:"#ff0",shadow:!1}],f;a()});