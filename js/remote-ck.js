// load in csv file
// var prices = "http://staging.chickenstockapp.com/test.csv";
function loadPrices(){$.ajax({url:"test.csv",async:!1,success:function(e){csv_as_array=$.csv.toArrays(e)},dataType:"text"})}var csv_as_array=[];loadPrices();$(document).ready(function(){function i(){var n=0,i="",s=e;switch(s){case"b1150g":fresh=3;frozen=20;break;case"b1150g1350g":fresh=4;frozen=21;break;case"b1350g1550g":fresh=5;frozen=22;break;case"b1550g2050g":fresh=6;frozen=23;break;case"r2050g2450g":fresh=7;frozen=24;break;case"r2450g":fresh=8;frozen=25;break;case"breast":fresh=9;frozen=26;break;case"725kg":fresh=12;frozen=29;break;case"725kg9kg":fresh=13;frozen=30;break;case"9kg":fresh=14;frozen=31;break;case"ducklingWeight":fresh=16;frozen=33;break;case"gooseWeight":fresh=18;frozen=35;break;default:}var o=$.map(csv_as_array,function(t){return t[n]}),u=$.map(csv_as_array,function(t){return t[fresh]}),a=$.map(csv_as_array,function(t){return t[frozen]}),f=[],l=[],c=0,h=13,p=new Array(h);for(var d=0;d<p.length;d++)p[d]=new Array(h);for(d=0;d<o.length;d++){var v=o[d],m=parseInt(u[d],10),g=parseInt(a[d],10);f.push(m);var y=v.split("-").join(" ");l.push(y);var b="20"+v.substr(v.length-2);if(b==r)if(t=="fresh"){p[c][0]=y;p[c][1]=m;c++}else{p[c][0]=y;p[c][1]=g;c++}else console.log("no year")}console.log(p);return p}function u(){var e=i();a&&a.destroy();a=$.jqplot("graph",[e],{animate:!0,textColor:"#42454f",gridPadding:{right:35},legend:{show:!0},grid:{backgroundColor:"#28292c",gridLineColor:"#40444d",borderColor:"#28292c",shadow:!1},axes:{xaxis:{renderer:$.jqplot.DateAxisRenderer,tickOptions:{formatString:"%b"},min:"Jan, 2013",tickInterval:"1 month"}},series:o})}function f(){o=[{label:"2013",color:"#bf4423",shadow:!1},{label:"2012",color:"#fd881b",shadow:!1}];t="fresh";console.log(t)}function l(){o=[{label:"2013",color:"#0c5888",shadow:!1},{label:"2012",color:"#0084d8",shadow:!1}];t="frozen";console.log(t)}var e="b1150g",t="fresh",n=new Date,r=n.getFullYear();$(".dropdown-menu li").click(function(t){e=t.target.id;console.log(e);u()});$("#fresh").click(function(){f();u()});$("#frozen").click(function(){l();u()});var s=[["2013-01-02 8:00AM",144],["2013-01-09 8:00AM",146],["2013-01-16 8:00AM",148],["2013-01-23 8:00AM",148],["2013-01-30 8:00AM",150],["2013-02-06 8:00AM",150],["2013-02-13 8:00AM",150],["2013-02-20 8:00AM",152],["2013-02-27 8:00AM",160],["2013-03-06 8:00AM",165],["2013-03-13 8:00AM",170],["2013-03-20 8:00AM",170],["2013-03-27 8:00AM",170],["2013-04-03 8:00AM",168],["2013-04-10 8:00AM",170],["2013-04-17 8:00AM",165],["2013-04-24 8:00AM",160],["2013-05-01 8:00AM",160],["2013-05-08 8:00AM",160],["2013-05-15 8:00AM",160],["2013-05-22 8:00AM",165],["2013-05-29 8:00AM",165],["2013-06-05 8:00AM",168],["2013-06-12 8:00AM",170],["2013-06-19 8:00AM",172],["2013-06-26 8:00AM",172],["2013-07-03 8:00AM",175],["2013-07-10 8:00AM",175],["2013-07-17 8:00AM",175],["2013-07-24 8:00AM",170],["2013-07-31 8:00AM",170],["2013-08-07 8:00AM",172],["2013-08-14 8:00AM",170],["2013-08-21 8:00AM",170],["2013-08-28 8:00AM",170],["2013-09-04 8:00AM",168],["2013-09-11 8:00AM",168],["2013-09-18 8:00AM",165],["2013-09-25 8:00AM",160],["2013-10-02 8:00AM",152],["2013-10-09 8:00AM",148],["2013-10-16 8:00AM",145],["2013-10-23 8:00AM",150],["2013-10-30 8:00AM",155],["2013-11-06 8:00AM",155],["2013-11-13 8:00AM",155],["2013-11-20 8:00AM",155],["2013-11-27 8:00AM",152],["2013-12-04 8:00AM",155],["2013-12-11 8:00AM",145],["2013-12-18 8:00AM",145],["2013-12-25 8:00AM",148]],o=[{label:"2013",color:"#bf4423",shadow:!1},{label:"2012",color:"#fd881b",shadow:!1}],a});