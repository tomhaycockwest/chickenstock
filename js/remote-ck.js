// load in csv file
// var prices = "http://staging.chickenstockapp.com/test.csv";
function loadPrices(){$.ajax({url:"test.csv",async:!1,success:function(e){csv_as_array=$.csv.toArrays(e)},dataType:"text"})}var csv_as_array=[];loadPrices();$(".dropdown-menu li").click(function(e){var t="",n="",r=e.target.id;switch(r){case"b1150g":t=0;n=3;break;case"b1150g1350g":t=3;n=1;break;case"b1350g1550g":t=5;n=1;break;case"b1550g2000g":t=12;n=1;break;default:}var s=$.map(csv_as_array,function(n){return n[t]}),o=$.map(csv_as_array,function(t){return t[n]});console.log(s);console.log(o);console.log(typeof s[0]);console.log(typeof o[0]);var u=[];for(i=0;i<s.length;i++){var a=s[i],f=a.split("-").join(" ");u+=f}console.log(u)});