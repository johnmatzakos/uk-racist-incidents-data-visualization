<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Racist Incidents</title>
	<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/maps/modules/map.js"></script>
	<script src="https://code.highcharts.com/maps/modules/data.js"></script>
	<script src="https://code.highcharts.com/modules/drilldown.js"></script>
	<script src="https://code.highcharts.com/mapdata/countries/gb/custom/gb-countries.js"></script>	
	<script type="text/javascript" src="https://code.highcharts.com/modules/exporting.js"></script>
	<!--<script type="text/javascript" src="localstorage.js"></script>-->
	<script type="text/javascript" src="racist_incidents.js"></script>
	<link rel="stylesheet" type="text/css" href="racist_incidents.css">
</head>

<body onload="home_charts();">
	<header><h1><center>Racist Incidents In The UK</center></h1></header>

		<ul>
			<li><a href="index.md">Home</a></li>
			<li><a href="about.html">About</a></li>
			<li><a href="englandwales.html">England & Wales</a></li>
			<li><a href="scotland.html">Scotland</a></li>
			<li><a href="resources.html">Resources</a></li>
			<li><a href="contact.html">Contact</a></li>
		</ul>

	
	<div class="main">
		<div id="container">
			<div id="container6" ></div>
			<div id="container1" ></div>
			<div id="container9" ></div>
			</br>
			<div id="container10d" onload="englandwales_charts();"></div>
			</br>
			<div id="container11e" onload="soctland_charts();"></div>
			</br>

		</div>
		<div id="sidebar" >
			<h3 class="overview"><center>Overview:</center></h3>
			
			<a href="#container1" id="total_incidents" ><h3><center>Total Incidents Per Year</center></h3></a>
			</br>
			<a href="#container3" id="crime_types"><h3><center>Crime Types</center></h3></a>
			</br>
			<a id="crime_type" href="#container10d" onclick="show(container10d)" ><center>England & Wales</center></a>
			</br>
			<a id="crime_types" href="#container11e" onclick="show(container11e)" ><center>Scotland</center></a>
			</br>
			
		</div>
		</br>
		<div id="footer">

		</div>
		<!--The following line was taken from w3schools.com: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp-->
		<button onclick="topFunction()" id="topButton" title="Return to top"><b>Return to Top</b></button>
		
	</div>
	
    
</body>
</html>
