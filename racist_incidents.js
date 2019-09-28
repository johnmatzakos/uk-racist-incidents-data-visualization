$(function () {
	
	var chart;
	$(document).ready(function() {
		document.title = "Racist Incidents In The UK 2008-2012";

		
		
		$('#container2').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Racist Incidents in England & Wales in 2008/09'
			},
			subtitle: {
				text: 'Source: <a href="https://data.gov.uk/">data.gov.uk</a>'
			},
			xAxis: {
				type: 'category',
				labels: {
					rotation: -45,
					style: {
						fontSize: '13px',
						fontFamily: 'Verdana, sans-serif'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Nummber of incidents'
				}
			},
			legend: {
				enabled: false
			},
			tooltip: {
				pointFormat: 'Racist Incidents in England & Wales in 2008/09: <b>{point.y:.3f}</b>'
			},
				series: [{
				name: 'England & Wales',
				data: [
					['Avon & Somerset', 1885],
					['Bedfordshire', 463],
					['Cambridgeshire', 397],
					['Cheshire', 471],
					['Cleveland', 453],
					['Cumbria', 256],
					['Derbyshire', 714],
					['Devon & Cornwall', 1,001],
					['Dorset', 681],
					['Durham', 346],
					['Essex', 738],
					['Gloucestershire', 476],
					['Greater Manchester', 4649],
					['Hampshire', 1457],
					['Hertfordshire', 1241],
					['Humberside', 526],
					['Kent', 1522],
					['Lancashire', 2,230],
					['Leicestershire', 1405],
					['Lincolnshire', 244],
					['London', 102],
					['Merseyside', 1448],
					['Metropolitan Police', 10190],
					['Norfolk', 487],
					['Northamptonshire', 937],
					['Northumbria', 1066],
					['North Yorkshire', 168],
					['Nottinghamshire', 1539],
					['South Yorkshire', 1904],
					['Staffordshire', 1172],
					['Suffolk', 488],
					['Surrey', 1151],
					['Sussex', 1001],
					['Thames Valley', 2655],
					['Warwickshire', 484],
					['West Mercia', 846],
					['West Midlands', 3110],
					['West Yorkshire', 2926],
					['Wiltshire', 308],
					['Dyfed-Powys', 181],
					['Gwent', 280],
					['North Wales', 319],
					['South Wales',1797]		
				],
				dataLabels: {
					enabled: true,
					rotation: -90,
					color: '#FFFFFF',
					align: 'right',
					format: '{point.y:.0f}', // no decimal points
					y: 10, // 10 pixels down from the top
					style: {
						fontSize: '13px',
						fontFamily: 'Verdana, sans-serif'
					}
				}
			}]
		});
		
		Highcharts.chart('container3', {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie'
			},
			title: {
				text: 'Crime Types of Incidents in Scotland in 2013-2014'
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						style: {
							color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						}
					}
				}
			},
			series: [{
				name: 'Crime Types',
				colorByPoint: true,
				data: [{
					name: 'Violence & Sexual Offences',
					y: 1.20
				}, {
					name: 'Crimes of Dishonesty',
					y: 0.50,
					sliced: true,
					selected: true
				}, {
					name: 'Fire-raising & Vandalism',
					y: 3.82
				}, {
					name: 'Common Assault',
					y: 12.30
				}, {
					name: 'Breach of Peace',
					y: 28.10
				}, {
					name: 'Racially Aggravated Harassment',
					y: 2.01
				}, {
					name: 'Racially Aggravated Conduct',
					y: 47.81
				},{
					name: 'Other Crimes',
					y: 0.73
				},{
					name: 'Other Offences',
					y: 3.55
				}]
			}]
		});
		
		//home_charts();
		
	});
});

function home_charts(){	
		
		$('#container1').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Racist Incidents In The UK 2008-2012'
			},
			subtitle: {
				text: 'Click the columns to view countries. Source: <a href="http://data.gov.uk">data.gov.uk</a>.'
			},
			xAxis: {
				type: 'category',
				title: {
					text: 'Year'
				}
			},
			yAxis: {
				title: {
					text: 'Total number of incidents'
				}

			},
			legend: {
				enabled: false
			},
			plotOptions: {
				series: {
					borderWidth: 0,
					dataLabels: {
						enabled: true,
						format: '{point.y:.0f}'
					}
				}
			},

			tooltip: {
				headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
				pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b><br/>'
			},

			series: [{
				name: 'Racist Incidents',
				colorByPoint: true,
				data: [{
					name: '2008-2009',
					y: 60859,
					drilldown: '2008-2009'
				}, {
					name: '2009-2010',
					y: 59832,
					drilldown: '2009-2010'
				}, {
					name: '2010-2011',
					y: 56098,
					drilldown: '2010-2011'
				}, {
					name: '2011-2012',
					y: 53067,
					drilldown: '2011-2012'
				}]
			}],
			drilldown: {
				series: [{
					name: '2008-2009',
					id: '2008-2009',
					data: [
						[
							'England',
							53598
						],
						[
							'Scotland',
							5145
						],
						[
							'Wales',
							2116
						]
					]
				}, {
					name: '2009-2010',
					id: '2009-2010',
					data: [
						[
							'England',
							52687
						],
						[
							'Scotland',
							4960
						],
						[
							'Wales',
							2185
						]
					]
				}, {
					name: '2010-2011',
					id: '2010-2011',
					data: [
						[
							'England',
							48886
						],
						[
							'Scotland',
							4911
						],
						[
							'Wales',
							2301
						]
					]
				}, {
					name: '2011-2012',
					id: '2011-2012',
					data: [
						[
							'England',
							45686
						],
						[
							'Scotland',
							5389
						],
						[
							'Wales',
							1992
						]
					]
				}]
			}
		});
		
		//data
		var data = [
			['gb-eng', 0],
			['gb-wls', 1],
			['gb-sct', 2]
			//['gb-nir', 3]
		];

		// Create the chart
		Highcharts.mapChart('container6', {
			chart: {
				map: 'countries/gb/custom/gb-countries'
			},

			title: {
				text: 'United Kingdom'
			},
			subtitle: {
				text: 'Click on the map to view the incidents occurred in each country.'
			},			
			mapNavigation: {
				enabled: true,
				buttonOptions: {
					verticalAlign: 'bottom'
				}
			},

			colorAxis: {
				min: 0
			},
			
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				},
				series: {
					cursor: 'pointer',
					point: {
						events: {
							 click: function() {
								$('#container1').replaceWith();
								draw_chart(this.name);
							 }
						}
					}
				}
			},
												
			series: [{
				data: data,
				name: 'Random data',
				states: {
					hover: {
						color: '#BADA55'
					}
				},
				dataLabels: {
					enabled: true,
					format: '{point.name}'
				}
			}]
		});

			
			
}

function draw_chart(catagory)
{
    if(catagory == 'England') {
      var years = ['2008-2009','2009-2010','2010-2011','2011-2012'];
      var incidents = [53598, 52687, 48886, 45686];
    }
	if(catagory == 'Wales') {
      var years = ['2008-2009','2009-2010','2010-2011','2011-2012'];
      var incidents = [2116, 2185, 2301, 1992];
    }
    if(catagory == 'Scotland') {
      var years = ['2008-2009','2009-2010','2010-2011','2011-2012'];
      var incidents = [5145, 4960, 4911, 5389];
    }
	if(catagory == 'Nothern Ireland') {
      var years = ['2008-2009','2009-2010','2010-2011','2011-2012'];
      var incidents = [0, 0, 0, 0];
    }
 
	 $('#container9').highcharts({
			chart: {
				type: 'column',
			},
			
			title: {
				text: 'Incidents over Population'
			},
			
			xAxis: {
				categories: years
			},
			
			yAxis: { 
				min: 0,
				title: {
					text: 'Incidents',
				}
			},
			
			tooltip: {
				headerFormat: '<span style="font-size:8px">{point.key}</span><table>',
				pointFormat:  '<tr style="border:none;"><td style="color:{series.color};padding:0;border:none;">{series.name}: </td>' +
							  '<td style="padding:0;border:none;"><b>{point.y:0f}</b></td></tr>',
				footerFormat: '</table>',
				shared: false,
				useHTML: true
			},
			
			plotOptions: {
				column: {
					pointPadding: 0,
					borderWidth: 0
				}
			},
			
			series: [{
					name: 'Incidents',
					data: incidents
				}]
	});
}

function englandwales_charts(){
	/*
	Highcharts.chart('container10', {
				chart: {
					type: 'column'
				},
				title: {
					text: 'Racist Incidents in England & Wales 2008-2012'
				},

				xAxis: {
					categories: [
							'Avon & Somerset',
							'Bedfordshire',
							'Cambridgeshire',
							'Cheshire',
							'Cleveland', 
							'Cumbria',
							'Derbyshire',
							'Devon & Cornwall',
							'Dorset',
							'Durham',
							'Essex',
							'Gloucestershire',
							'Greater Manchester',
							'Hampshire',
							'Hertfordshire',
							'Humberside',
							'Kent',
							'Lancashire',
							'Leicestershire',
							'Lincolnshire',
							'London',
							'Merseyside',
							'Metropolitan Police',
							'Norfolk',
							'Northamptonshire',
							'Northumbria',
							'North Yorkshire',
							'Nottinghamshire',
							'South Yorkshire',
							'Staffordshire',
							'Suffolk',
							'Surrey',
							'Sussex',
							'Thames Valley',
							'Warwickshire',
							'West Mercia',
							'West Midlands',
							'West Yorkshire',
							'Wiltshire',
							'Dyfed-Powys',
							'Gwent',
							'North Wales',
							'South Wales',		
					],
					crosshair: true
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Number of Incidents'
					}
				},
				tooltip: {
					headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
								 '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					name: '2008-2009',
					data: [1885, 463, 397, 471, 453, 256, 714, 1001, 681, 346, 738, 476, 4649, 1457, 1241, 526, 1522,
							2230, 1405, 244, 102, 1448, 10190, 487, 937, 1066, 168, 1539, 1904, 1172, 488, 1151,
							1001, 2655, 484, 846, 3110, 2926, 308, 181, 280, 319, 1797]

				}, {
					name: '2009-2010',
					data: [2037, 474, 498, 384, 494, 213, 839, 1036, 641, 332, 858, 406, 4100, 1564, 1214, 565, 1396,
							2132, 1534, 274, 58, 1417, 10541, 469, 926, 971, 197, 1457, 2264, 1290, 373, 1130, 802,
							2625, 358, 715, 2758, 2687, 213, 172, 273, 375, 1810]

				}, {
					name: '2010-2011',
					data: [1894, 493, 411, 425, 581, 219, 972, 931, 587, 254, 796, 404, 3288, 1491, 1133, 582, 1357, 
							1735, 1342, 277, 59, 1313, 9405, 605, 801, 1027, 215, 1256, 2019, 1354, 294, 1002,
							635, 2469, 367, 765, 2646, 2803, 195, 141, 343, 327, 1974]

				}, {
					name: '2011-2012',
					data: [1565, 370, 286, 360, 554, 238, 660, 877, 481, 264, 794, 322, 3740, 1429, 1232, 722, 1237,
							1726, 1213, 279, 59, 1320, 8327, 664, 908, 913, 237, 1113, 1515, 906, 477, 787, 531,
							2001, 365, 904, 2765, 2618, 375, 152, 400, 377, 1615]
				}]
			});
			*/
			Highcharts.chart('container10a', {
				chart: {
					type: 'column'
				},
				title: {
					text: 'Racist Incidents in England & Wales 2008 - 2012 A - G'
				},

				xAxis: {
					categories: [
							'Avon & Somerset',
							'Bedfordshire',
							'Cambridgeshire',
							'Cheshire',
							'Cleveland', 
							'Cumbria',
							'Derbyshire',
							'Devon & Cornwall',
							'Dorset',
							'Durham',
							'Essex',
							'Gloucestershire',
							'Greater Manchester'		
					],
					crosshair: true
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Number of Incidents'
					}
				},
				tooltip: {
					headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
								 '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					name: '2008-2009',
					data: [1885, 463, 397, 471, 453, 256, 714, 1001, 681, 346, 738, 476, 4649]

				}, {
					name: '2009-2010',
					data: [2037, 474, 498, 384, 494, 213, 839, 1036, 641, 332, 858, 406, 4100]

				}, {
					name: '2010-2011',
					data: [1894, 493, 411, 425, 581, 219, 972, 931, 587, 254, 796, 404, 3288]

				}, {
					name: '2011-2012',
					data: [1565, 370, 286, 360, 554, 238, 660, 877, 481, 264, 794, 322, 3740]
				}]
			});
			
			Highcharts.chart('container10b', {
				chart: {
					type: 'column'
				},
				title: {
					text: 'Racist Incidents in England & Wales 2008 - 2012 H - N'
				},

				xAxis: {
					categories: [
							'Hampshire',
							'Hertfordshire',
							'Humberside',
							'Kent',
							'Lancashire',
							'Leicestershire',
							'Lincolnshire',
							'London',
							'Merseyside',
							'Metropolitan Police',
							'Norfolk',
							'Northamptonshire',
							'Northumbria',
							'North Yorkshire',
							'Nottinghamshire'	
					],
					crosshair: true
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Number of Incidents'
					}
				},
				tooltip: {
					headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
								 '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					name: '2008-2009',
					data: [1457, 1241, 526, 1522, 2230, 1405, 244, 102, 1448, 10190, 487, 937, 1066, 168, 1539]

				}, {
					name: '2009-2010',
					data: [1564, 1214, 565, 1396, 2132, 1534, 274, 58, 1417, 10541, 469, 926, 971, 197, 1457]

				}, {
					name: '2010-2011',
					data: [1491, 1133, 582, 1357, 1735, 1342, 277, 59, 1313, 9405, 605, 801, 1027, 215, 1256]

				}, {
					name: '2011-2012',
					data: [1429, 1232, 722, 1237, 1726, 1213, 279, 59, 1320, 8327, 664, 908, 913, 237, 1113]
				}]
			});
			
			Highcharts.chart('container10c', {
				chart: {
					type: 'column'
				},
				title: {
					text: 'Racist Incidents in England & Wales 2008 - 2012 O - Z'
				},

				xAxis: {
					categories: [
							'South Yorkshire',
							'Staffordshire',
							'Suffolk',
							'Surrey',
							'Sussex',
							'Thames Valley',
							'Warwickshire',
							'West Mercia',
							'West Midlands',
							'West Yorkshire',
							'Wiltshire',
							'Dyfed-Powys',
							'Gwent',
							'North Wales',
							'South Wales'
					],
					crosshair: true
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Number of Incidents'
					}
				},
				tooltip: {
					headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
								 '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					name: '2008-2009',
					data: [1904, 1172, 488, 1151, 1001, 2655, 484, 846, 3110, 2926, 308, 181, 280, 319, 1797]

				}, {
					name: '2009-2010',
					data: [2264, 1290, 373, 1130, 802, 2625, 358, 715, 2758, 2687, 213, 172, 273, 375, 1810]

				}, {
					name: '2010-2011',
					data: [2019, 1354, 294, 1002, 635, 2469, 367, 765, 2646, 2803, 195, 141, 343, 327, 1974]

				}, {
					name: '2011-2012',
					data: [1515, 906, 477, 787, 531, 2001, 365, 904, 2765, 2618, 375, 152, 400, 377, 1615]
				}]
			});
			
		$(document).ready(function(){
			  
			$('#total_incidents').click(function(){ 
				$('#container9').hide();
				$('#container1').show();
			});

		}	);
		
		Highcharts.chart('container10d', {
		chart: {
			type: 'pie'
		},
		title: {
			text: 'Crime Types & Motives of Racist Incidents'
		},
		subtitle: {
			text: 'Click the slices to view further classification. Source:  <a href="http://www.gov.scot/Topics/Statistics/Browse/Crime-Justice">www.gov.scot</a>'
		},
		plotOptions: {
			series: {
				dataLabels: {
					enabled: true,
					format: '{point.name}: {point.y:.0f}%'
				}
			}
		},

		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
		},
		series: [{
			name: 'Crime Types',
			colorByPoint: true,
			data: [{
				name: 'Violence',
				y: 83,
				drilldown: 'Violence'
			}, {
				name: 'Criminal Damage',
				y: 12,
				drilldown: 'Criminal Damage'
			}, {
				name: 'Other Notifiable Offences',
				y: 4,
				drilldown: 'Other Notifiable Offences'
			}]
		}],
		drilldown: {
			series: [
			{
				name: 'Violence',
				id: 'Violence',
				data: [
					['Race', 85],
					['Religion', 75],
					['Sexual Orientation', 81],
					['Disability', 63],
					['Transgender', 67]
				]
			}, 
			{
				name: 'Criminal Damage',
				id: 'Criminal Damage',
				data: [
					['Race', 12],
					['Religion', 19],
					['Sexual Orientation', 12],
					['Disability', 18],
					['Transgender', 21]
				]
			}, 
			{
				name: 'Other Notifiable Offences',
				id: 'Other Notifiable Offences',
				data: [
					['Race', 3],
					['Religion', 6],
					['Sexual Orientation', 7],
					['Disability', 19],
					['Transgender', 11]
				]
			}
			]
		}
	});
	
	$(document).ready(function(){
		$('#container10d').hide();
			  
		$('#crime_type').click(function(){ 
			$('#container10a').hide();
			$('#container10b').hide();
			$('#container10c').hide();
			$('#container10d').show();
		});
			  
		$('#incident_area').click(function(){ 
			$('#container10d').hide();
			$('#container10a').show();
			$('#container10b').show();
			$('#container10c').show();
		});

	});
	
}

function scotland_charts(){
	/*
	Highcharts.chart('container11', {
				chart: {
					type: 'column'
				},
				title: {
					text: 'Racist Incidents in Scotland 2004-2014'
				},
				
				xAxis: {
					categories: [
						'Aberdeen City', 
						'Aberdeenshire', 
						'Angus', 
						'Argyll & Bute', 
						'Clackmannanshire', 
						'Dumfries & Galloway', 
						'Dundee City', 
						'East Ayrshire', 
						'East Dunbartonshire', 
						'East Lothian', 
						'East Renfrewshire', 
						'Edinburgh', 
						'Eilean Siar', 
						'Falkirk', 
						'Fife', 
						'Glasgow City', 
						'Highland', 
						'Inverclyde', 
						'Midlothian', 
						'Moray', 
						'North Ayrshire', 
						'North Lanarkshire', 
						'Orkney Islands', 
						'Perth & Kinross', 
						'Renfrewshire', 
						'Scottish Borders', 
						'Shetland Islands', 
						'South Ayrshire', 
						'South Lanarkshire', 
						'Stirling',
						'West Dunbartonshire', 
						'West Lothian', 
					],
					crosshair: true
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Number of Incidents'
					}
				},
				tooltip: {
					headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
								 '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					name: '2004-2005',
					data: [313, 86, 46, 33, 50, 78, 217, 75, 41, 28, 48, 599, 18, 160, 302, 1226, 97, 32, 52, 38, 91, 181, 4, 
							70, 131, 26, 4, 42, 162, 70, 90, 109]

				}, {
					name: '2005-2006',
					data: [267, 75, 66, 25, 49, 89, 246, 67, 33, 38, 55, 972, 12, 182, 241, 1277, 107, 36, 81, 44, 103, 207, 
							4, 93, 86, 43, 5, 64, 181, 124, 82, 158]

				}, {
					name: '2006-2007',
					data: [309, 88, 55, 43, 58, 102, 242, 78, 33, 64, 40, 1179, 8, 167, 193, 1209, 107, 31, 40,
							42, 102, 234, 3, 77, 130, 41, 5, 45, 199, 132, 69, 197]

				}, {
					name: '2007-2008',
					data: [322, 31, 50, 34, 58, 64, 244, 69, 42, 54, 33, 1021, 10, 171, 149, 1301, 122, 52, 65, 
							38, 99, 282, 5, 86, 123, 47, 3, 63, 212, 107, 86, 204]
				}, {
					name: '2008-2009',
					data: [483, 107, 65, 25, 53, 98, 215, 71, 38, 35, 36, 822, 11, 215, 138, 1256, 123, 38, 43, 
							31, 100, 249, 2, 88, 118, 46, 2, 53, 210, 113, 95, 166]
				}, {
					name: '2009-2010',
					data: [451, 90 , 45 , 26 , 41 , 78 , 160 , 81 , 41 , 35 , 40 , 898 , 6 , 124 , 139 , 1318 , 81 ,
							20 , 35 , 83 , 92 , 252 , 2 , 79 , 122 , 43 , 77 , 179 , 102 , 73 , 147]
				}, {
					name: '2010-2011',
					data: [464 , 90 , 49 , 32 , 35 , 66 , 157 , 74 , 40 , 47 , 43 , 844 , 3 , 152 , 209 , 1328 , 68 , 27 ,
							46 , 75 , 88 , 220 , 4 , 78 , 145 , 38 , 3 , 50 , 168 , 91 , 69 , 108]
				}, {
					name: '2011-2012',
					data: [429 , 96 , 55 , 45 , 68 , 68 , 154 , 70 , 31 , 53 , 48 , 1017 , 0, 151 , 220 , 1499 , 94 , 40 , 60 , 
							52 , 113 , 205 , 8 , 61 , 136 , 27 , 5 , 62 , 139 , 113 , 90 , 180]
				}, {
					name: '2012-2013',
					data: [327 , 80 , 32 , 34 , 52 , 68 , 141 , 53 , 30 , 56 , 21 , 916 , 2 , 160 , 180 , 1220 , 100 , 25 , 57 ,
							39 , 91 , 188 , 8 , 81 , 150 , 37 , 9 , 47 , 127 , 101 , 52 , 144]
				}, {
					name: '2013-2014',
					data: [271 , 59 , 45 , 33 , 41 , 85 , 133 , 72 , 23 , 90 , 26 , 934 , 2 , 138 , 246 , 1232 , 80 , 22 , 103 , 
							41 , 84 , 202 , 3 , 89 , 144 ,82 , 9 , 55 , 111 , 86 , 57 , 209]
				}]
	});
	*/
	
	Highcharts.chart('container11a', {
				chart: {
					type: 'column'
				},
				title: {
					text: 'Racist Incidents in Scotland 2004-2014 A - D'
				},
				
				xAxis: {
					categories: [
						'Aberdeen City', 
						'Aberdeenshire', 
						'Angus', 
						'Argyll & Bute', 
						'Clackmannanshire', 
						'Dumfries & Galloway', 
						'Dundee City'
					],
					crosshair: true
				},
				yAxis: {
					min: 0,
					max: 500,
					title: {
						text: 'Number of Incidents'
					}
				},
				tooltip: {
					headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
								 '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					name: '2004-2005',
					data: [313, 86, 46, 33, 50, 78, 217]

				}, {
					name: '2005-2006',
					data: [267, 75, 66, 25, 49, 89, 246]

				}, {
					name: '2006-2007',
					data: [309, 88, 55, 43, 58, 102, 242]

				}, {
					name: '2007-2008',
					data: [322, 31, 50, 34, 58, 64, 244]
				}, {
					name: '2008-2009',
					data: [483, 107, 65, 25, 53, 98, 215]
				}, {
					name: '2009-2010',
					data: [451, 90 , 45 , 26 , 41 , 78 , 160]
				}, {
					name: '2010-2011',
					data: [464 , 90 , 49 , 32 , 35 , 66 , 157]
				}, {
					name: '2011-2012',
					data: [429 , 96 , 55 , 45 , 68 , 68 , 154]
				}, {
					name: '2012-2013',
					data: [327 , 80 , 32 , 34 , 52 , 68 , 141]
				}, {
					name: '2013-2014',
					data: [271 , 59 , 45 , 33 , 41 , 85 , 133]
				}]
	});
			
		Highcharts.chart('container11b', {
				chart: {
					type: 'column'
				},
				title: {
					text: 'Racist Incidents in Scotland 2004-2014 E - F'
				},
				
				xAxis: {
					categories: [
						'East Ayrshire', 
						'East Dunbartonshire', 
						'East Lothian', 
						'East Renfrewshire', 
						'Edinburgh', 
						'Eilean Siar', 
						'Falkirk', 
						'Fife'
					],
					crosshair: true
				},
				yAxis: {
					min: 0,
					max: 1200,
					title: {
						text: 'Number of Incidents'
					}
				},
				tooltip: {
					headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
								 '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					name: '2004-2005',
					data: [75, 41, 28, 48, 599, 18, 160, 302]

				}, {
					name: '2005-2006',
					data: [67, 33, 38, 55, 972, 12, 182, 241]

				}, {
					name: '2006-2007',
					data: [78, 33, 64, 40, 1179, 8, 167, 193]

				}, {
					name: '2007-2008',
					data: [69, 42, 54, 33, 1021, 10, 171, 149]
				}, {
					name: '2008-2009',
					data: [71, 38, 35, 36, 822, 11, 215, 138]
				}, {
					name: '2009-2010',
					data: [81 , 41 , 35 , 40 , 898 , 6 , 124]
				}, {
					name: '2010-2011',
					data: [74 , 40 , 47 , 43 , 844 , 3 , 152 , 209]
				}, {
					name: '2011-2012',
					data: [70 , 31 , 53 , 48 , 1017 , 0, 151 , 220]
				}, {
					name: '2012-2013',
					data: [53 , 30 , 56 , 21 , 916 , 2 , 160 , 180]
				}, {
					name: '2013-2014',
					data: [72 , 23 , 90 , 26 , 934 , 2 , 138 , 246]
				}]
	});
	
		Highcharts.chart('container11c', {
				chart: {
					type: 'column'
				},
				title: {
					text: 'Racist Incidents in Scotland 2004-2014 G - N'
				},
				
				xAxis: {
					categories: [
						'Glasgow City', 
						'Highland', 
						'Inverclyde', 
						'Midlothian', 
						'Moray', 
						'North Ayrshire', 
						'North Lanarkshire' 
					],
					crosshair: true
				},
				yAxis: {
					min: 0,
					max: 1500,
					title: {
						text: 'Number of Incidents'
					}
				},
				tooltip: {
					headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
								 '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					name: '2004-2005',
					data: [1226, 97, 32, 52, 38, 91, 181]

				}, {
					name: '2005-2006',
					data: [1277, 107, 36, 81, 44, 103, 207]

				}, {
					name: '2006-2007',
					data: [1209, 107, 31, 40, 42, 102, 234]

				}, {
					name: '2007-2008',
					data: [1301, 122, 52, 65, 38, 99, 282]
				}, {
					name: '2008-2009',
					data: [1256, 123, 38, 43, 31, 100, 249]
				}, {
					name: '2009-2010',
					data: [1318 , 81 , 20 , 35 , 83 , 92 , 252]
				}, {
					name: '2010-2011',
					data: [1328 , 68 , 27 , 46 , 75 , 88 , 220]
				}, {
					name: '2011-2012',
					data: [1499 , 94 , 40 , 60 , 52 , 113 , 205]
				}, {
					name: '2012-2013',
					data: [1220 , 100 , 25 , 57 , 39 , 91 , 188]
				}, {
					name: '2013-2014',
					data: [1232 , 80 , 22 , 103 , 41 , 84 , 202]
				}]
	});
	
		Highcharts.chart('container11d', {
				chart: {
					type: 'column'
				},
				title: {
					text: 'Racist Incidents in Scotland 2004-2014 O - Z'
				},
				
				xAxis: {
					categories: [
						'Orkney Islands', 
						'Perth & Kinross', 
						'Renfrewshire', 
						'Scottish Borders', 
						'Shetland Islands', 
						'South Ayrshire', 
						'South Lanarkshire', 
						'Stirling',
						'West Dunbartonshire', 
						'West Lothian'
					],
					crosshair: true
				},
				yAxis: {
					min: 0,
					max: 220,
					title: {
						text: 'Number of Incidents'
					}
				},
				tooltip: {
					headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
								 '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					name: '2004-2005',
					data: [4, 70, 131, 26, 4, 42, 162, 70, 90, 109]

				}, {
					name: '2005-2006',
					data: [4, 93, 86, 43, 5, 64, 181, 124, 82, 158]

				}, {
					name: '2006-2007',
					data: [3, 77, 130, 41, 5, 45, 199, 132, 69, 197]

				}, {
					name: '2007-2008',
					data: [5, 86, 123, 47, 3, 63, 212, 107, 86, 204]
				}, {
					name: '2008-2009',
					data: [2, 88, 118, 46, 2, 53, 210, 113, 95, 166]
				}, {
					name: '2009-2010',
					data: [2 , 79 , 122 , 43 , 0, 77 , 179 , 102 , 73 , 147]
				}, {
					name: '2010-2011',
					data: [4 , 78 , 145 , 38 , 3 , 50 , 168 , 91 , 69 , 108]
				}, {
					name: '2011-2012',
					data: [8 , 61 , 136 , 27 , 5 , 62 , 139 , 113 , 90 , 180]
				}, {
					name: '2012-2013',
					data: [8 , 81 , 150 , 37 , 9 , 47 , 127 , 101 , 52 , 144]
				}, {
					name: '2013-2014',
					data: [3 , 89 , 144 ,82 , 9 , 55 , 111 , 86 , 57 , 209]
				}]
	});
	
	Highcharts.chart('container11e', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			text: 'Crime Types of Incidents in 2013-2014'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
					style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					}
				}
			}
		},
		series: [{
			name: 'Crime Types',
			colorByPoint: true,
			data: [{
				name: 'Violence & Sexual Offences',
				y: 1.20
			}, {
				name: 'Crimes of Dishonesty',
				y: 0.50,
				sliced: true,
				selected: true
			}, {
				name: 'Fire-raising & Vandalism',
				y: 3.82
			}, {
				name: 'Common Assault',
				y: 12.30
			}, {
				name: 'Breach of Peace',
				y: 28.10
			}, {
				name: 'Racially Aggravated Harassment',
				y: 2.01
			}, {
				name: 'Racially Aggravated Conduct',
				y: 47.81
			},{
				name: 'Other Crimes',
				y: 0.73
			},{
				name: 'Other Offences',
				y: 3.55
			}]
		}]
	});
	
	//This function replaces the main set of graphs 
	//depending on what the user want to visualize
	//using the sidebar in each tab of the website
	$(document).ready(function(){
		$('#container11e').hide();

		$('#crime_types').click(function(){ 
			$('#container11a').hide();
			$('#container11b').hide();
			$('#container11c').hide();
			$('#container11d').hide();
			$('#container11e').show();
		});
			  
		$('#incident_areas').click(function(){ 
			$('#container11e').hide();
			$('#container11a').show();
			$('#container11b').show();
			$('#container11c').show();
			$('#container11d').show();
		});

	});
	
	Highcharts.chart('container11f', {
		chart: {
			type: 'pie'
		},
		title: {
			text: 'Ethnic Groups of Victims/Complainers of Racist Incidents'
		},
		subtitle: {
			text: 'Click the slices to view further classification. Source:  <a href="http://www.gov.scot/Topics/Statistics/Browse/Crime-Justice">www.gov.scot</a>'
		},
		plotOptions: {
			series: {
				dataLabels: {
					enabled: true,
					format: '{point.name}: {point.y:.0f}%'
				}
			}
		},

		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
		},
		series: [{
			name: 'Ethnic Groups',
			colorByPoint: true,
			data: [{
				name: 'White',
				y: 49,
				drilldown: 'White'
			}, {
				name: 'Asian',
				y: 32,
				drilldown: 'Asian'
			}, {
				name: 'Black',
				y: 12,
				drilldown: 'Black'
			}, {
				name: 'Arab',
				y: 1,
				drilldown: null
			}, {
				name: 'Mixed',
				y: 3,
				drilldown: null
			}, {
				name: 'Other',
				y: 2,
				drilldown: null
			}]
		}],
		drilldown: {
			series: [
			{
				name: 'White',
				id: 'White',
				data: [
					['Scottish White', 19],
					['English White', 6],
					['Welsh White', 0],
					['Northern Irish White', 1],
					['British White', 5],
					['Irish White', 1],
					['Gypsy/Traveller White', 0],
					['Polish White', 9],
					['Other White', 8]
				]
			}, 
			{
				name: 'Asian',
				id: 'Asian',
				data: [
					['Pakistani, Pakistani Scottish or Pakistani British', 16],
					['Indian, Indian Scottish or Indian British', 5],
					['Bangladeshi, Bangladeshi Scottish or Bangladeshi British', 1],
					['Chinese, Chinese Scottish or Chinese British', 2],
					['Other Asian, Asian Scottish or Asian British', 8]
				]
			}, 
			{
				name: 'Black',
				id: 'Black',
				data: [
					['African, African Scottish or African British', 8],
					['Caribbean, Caribbean Scottish or Caribbean British', 3],
					['Black, Black Scottish or Black British', 1],
					['Other African, Caribbean or Black – please state', 0]
				]
			}
			]
		}
	});
	
	$(document).ready(function(){
		$('#container11f').hide();
			  
		$('#ethnic_groups').click(function(){ 
			$('#container11a').hide();
			$('#container11b').hide();
			$('#container11c').hide();
			$('#container11d').hide();
			$('#container11e').hide();
			$('#container11f').show();
		});
			  
		$('#incident_areas').click(function(){ 
			$('#container11f').hide();
			$('#container11a').show();
			$('#container11b').show();
			$('#container11c').show();
			$('#container11d').show();
		});
		
		$('#crime_types').click(function(){ 
			$('#container11f').hide();
			$('#container11e').show();
		});

	});
	
	Highcharts.chart('container11g', {
		chart: {
			type: 'pie'
		},
		title: {
			text: 'Ethnic Groups of VPerpetrators of Racist Incidents'
		},
		subtitle: {
			text: 'Click the slices to view further classification. Source:  <a href="http://www.gov.scot/Topics/Statistics/Browse/Crime-Justice">www.gov.scot</a>'
		},
		plotOptions: {
			series: {
				dataLabels: {
					enabled: true,
					format: '{point.name}: {point.y:.1f}%'
				}
			}
		},

		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
		},
		series: [{
			name: 'Ethnic Groups',
			colorByPoint: true,
			data: [{
				name: 'White',
				y: 95.3,
				drilldown: 'White'
			}, {
				name: 'Asian',
				y: 2.3,
				drilldown: 'null'
			}, {
				name: 'Black',
				y: 1.2,
				drilldown: 'null'
			}, {
				name: 'Mixed & Other',
				y: 1.2,
				drilldown: null
			}]
		}],
		drilldown: {
			series: [
			{
				name: 'White',
				id: 'White',
				data: [
					['British White', 90.4],
					['Irish/Polish/Other White', 4.9]
				]
			}
			]
		}
	});
	
	$(document).ready(function(){
		$('#container11g').hide();
			  
		$('#ethnic_groups2').click(function(){ 
			$('#container11a').hide();
			$('#container11b').hide();
			$('#container11c').hide();
			$('#container11d').hide();
			$('#container11e').hide();
			$('#container11f').hide();
			$('#container11g').show();
		});
			  
		$('#incident_areas').click(function(){ 
			$('#container11g').hide();
			$('#container11a').show();
			$('#container11b').show();
			$('#container11c').show();
			$('#container11d').show();
		});
		
		$('#crime_types').click(function(){ 
			$('#container11g').hide();
			$('#container11e').show();
		});
		
		$('#ethnic_groups').click(function(){ 
			$('#container11g').hide();
			$('#container11f').show();
		});

	});
	
}

/*The following piece of javascript code was taken from w3schools.com: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp*/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

/*--------------------------------------------------------------------------------------------------------------------------------*/

//This function exists only for testing purposes for different highcharts 
function test_charts(){
/*
	$('#container3').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Racist Incidents in Scotland in 2008/09'
			},
			subtitle: {
				text: 'Source: <a href="https://data.gov.uk/">data.gov.uk</a>'
			},
			xAxis: {
				type: 'category',
				labels: {
					rotation: -45,
					style: {
						fontSize: '13px',
						fontFamily: 'Verdana, sans-serif'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Nummber of incidents'
				}
			},
			legend: {
				enabled: false
			},
			tooltip: {
				pointFormat: 'Racist Incidents in Scotland in 2008/09: <b>{point.y:.3f}</b>'
			},
			series: [{
				name: 'Scotland',
				data: [
					['Aberdeen City', ]
					['Aberdeenshire', ]
					['Angus', ]
					['Argyll & Bute', ]
					['Clackmannanshire', ]
					['Dumfries & Galloway', ]
					['Dundee City', ]
					['East Ayrshire', ]
					['East Dunbartonshire', ]
					['East Lothian', ]
					['East Renfrewshire', ]
					['Edinburgh, City of', ]
					['Eilean Siar', ]
					['Falkirk', ]
					['Fife 1', ]
					['Glasgow City', ]
					['Highland', ]
					['Inverclyde', ]
					['Midlothian', ]
					['Moray', ]
					['North Ayrshire', ]
					['North Lanarkshire', ]
					['Orkney Islands', ]
					['Perth & Kinross', ]
					['Renfrewshire', ]
					['Scottish Borders', ]
					['Shetland Islands', ]
					['South Ayrshire', ]
					['South Lanarkshire', ]
					['Stirling',
					['West Dunbartonshire', ]
					['West Lothian', ]
				],
				dataLabels: {
					enabled: true,
					rotation: -90,
					color: '#FFFFFF',
					align: 'right',
					format: '{point.y:.0f}', // no decimal points
					y: 10, // 10 pixels down from the top
					style: {
						fontSize: '13px',
						fontFamily: 'Verdana, sans-serif'
					}
				}
			}]
		});
		
		
			
		$('#container4').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Monthly Average Rainfall'
			},
			subtitle: {
				text: 'Source: WorldClimate.com'
			},
			xAxis: {
				categories: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec'
				],
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Rainfall (mm)'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
					'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: [{
				name: 'Tokyo',
				data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

			}, {
				name: 'New York',
				data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

			}, {
				name: 'London',
				data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

			}, {
				name: 'Berlin',
				data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

			}]
		});
			
		
		$('#container5').highcharts({
			chart: {
				height: 250,
				spacingRight: 30,
			},
			title: {
				text: 'Racist Incidents in England & Wales'
			},
			subtitle: {
				text: '2008-2012'
			},
			xAxis: {
				categories: ['Avon & Somerset','Bedfordshire','Cambridgeshire','Cheshire','Cleveland','Cumbria','Derbyshire','Devon & Cornwall','Dorset','Durham', 'Essex','Gloucestershire',
				'Greater Manchester','Hampshire','Hertfordshire','Humberside','Kent','Lancashire','Leicestershire','Lincolnshire','London', 'Merseyside','Metropolitan Police','Norfolk',
				'Northamptonshire','Northumbria','North Yorkshire','Nottinghamshire','South Yorkshire', 'Staffordshire','Suffolk','Surrey','Sussex','Thames Valley','Warwickshire','West Mercia',
				'West Midlands','West Yorkshire','Wiltshire','Dyfed-Powys','Gwent','North Wales','South Wales'],
				tickInterval: 1
			},

			series: [
			{
				name: '2008-2009',
				data: [1885,463,397,471,453,256,714,1001,681,346,738,476,4649,1457,1241,526,1522,2230,1405,244,102,1448,10190,487,937,1066,168,1539,1904,1172,488,1151,1001, 2655,484,846,3110,2926,308,181,280,319,1797]
			}, 
			{
				name: '2009-2010',
				data: [2037,474,498,384,494,213,839,1036,641,332,858,406,4100,1564,1214,565,1396,2132,1534,274,58,1417,10541,469,926,971,197,1457,2264,1290,373,1130,802,2625, 358,715,2758,2687,213,172,273,375,1810]
			},
			{
				name: '2010-2011',
				data: [1894,493,411,425,581,219,972,931,587,254,796,404,3288,1491,1133,582,1357,1735,1342,277,59,1313,9405,605,801,1027,215,1256,2019,1354,294,1002,635,2469,367, 765,2646,2803,195,141,343,327,1974]
			}
			]
		});
		
		// Prepare demo data
		// Data is joined to map using value of 'hc-key' property by default.
		// See API docs for 'joinBy' for more info on linking data and map.
		var data = [
				['gb-ay', 0],
				['gb-3270', 1],
				['gb-hi', 2],
				['gb-ab', 3],
				['gb-ps', 4],
				['gb-wi', 5],
				['gb-my', 6],
				['gb-7398', 7],
				['gb-eb', 8],
				['gb-lc', 9],
				['gb-2393', 10],
				['gb-db', 11],
				['gb-de', 12],
				['gb-an', 13],
				['gb-bl', 14],
				['gb-ng', 15],
				['gb-do', 16],
				['gb-2458', 17],
				['gb-er', 18],
				['gb-ea', 19],
				['gb-gg', 20],
				['gb-ed', 21],
				['gb-ic', 22],
				['gb-2446', 23],
				['gb-nn', 24],
				['gb-rf', 25],
				['gb-sa', 26],
				['gb-sl', 27],
				['gb-wd', 28],
				['gb-ar', 29],
				['gb-as', 30],
				['gb-fk', 31],
				['gb-zg', 32],
				['gb-cc', 33],
				['gb-du', 34],
				['gb-fi', 35],
				['gb-ml', 36],
				['gb-wh', 37],
				['gb-bo', 38],
				['gb-dh', 39],
				['gb-da', 40],
				['gb-hp', 41],
				['gb-mb', 42],
				['gb-rc', 43],
				['gb-zt', 44],
				['gb-ha', 45],
				['gb-zh', 46],
				['gb-2318', 47],
				['gb-gc', 48],
				['gb-mk', 49],
				['gb-bu', 50],
				['gb-bn', 51],
				['gb-bs', 52],
				['gb-ns', 53],
				['gb-sj', 54],
				['gb-2389', 55],
				['gb-ds', 56],
				['gb-2391', 57],
				['gb-ht', 58],
				['gb-cm', 59],
				['gb-kh', 60],
				['gb-ne', 61],
				['gb-ba', 62],
				['gb-xb', 63],
				['gb-ke', 64],
				['gb-bz', 65],
				['gb-be', 66],
				['gb-cn', 67],
				['gb-eg', 68],
				['gb-ef', 69],
				['gb-gr', 70],
				['gb-hf', 71],
				['gb-hu', 72],
				['gb-it', 73],
				['gb-kc', 74],
				['gb-cy', 75],
				['gb-me', 76],
				['gb-rb', 77],
				['gb-ru', 78],
				['gb-su', 79],
				['gb-th', 80],
				['gb-wf', 81],
				['gb-ww', 82],
				['gb-we', 83],
				['gb-li', 84],
				['gb-bf', 85],
				['gb-ld', 86],
				['gb-nm', 87],
				['gb-am', 88],
				['gb-bb', 89],
				['gb-cr', 90],
				['gb-dn', 91],
				['gb-2347', 92],
				['gb-lb', 93],
				['gb-mf', 94],
				['gb-om', 95],
				['gb-lr', 96],
				['gb-cf', 97],
				['gb-nw', 98],
				['gb-2354', 99],
				['gb-dw', 100],
				['gb-cl', 101],
				['gb-by', 102],
				['gb-cs', 103],
				['gb-pe', 104],
				['gb-2301', 105],
				['gb-gd', 106],
				['gb-sp', 107],
				['gb-po', 108],
				['gb-mt', 109],
				['gb-bj', 110],
				['gb-cp', 111],
				['gb-rt', 112],
				['gb-ca', 113],
				['gb-vg', 114],
				['gb-np', 115],
				['gb-sw', 116],
				['gb-7122', 117],
				['gb-bw', 118],
				['gb-la', 119],
				['gb-ey', 120],
				['gb-yk', 121],
				['gb-di', 122],
				['gb-fl', 123],
				['gb-wx', 124],
				['gb-bg', 125],
				['gb-no', 126],
				['gb-tf', 127],
				['gb-lm', 128],
				['gb-sb', 129],
				['gb-fe', 130],
				['gb-ny', 131],
				['gb-2420', 132],
				['gb-tb', 133],
				['gb-ex', 134],
				['gb-nf', 135],
				['gb-bh', 136],
				['gb-hv', 137],
				['gb-tr', 138],
				['gb-ss', 139],
				['gb-ws', 140],
				['gb-wr', 141],
				['gb-hd', 142],
				['gb-kt', 143],
				['gb-sr', 144],
				['gb-es', 145],
				['gb-ox', 146],
				['gb-sn', 147],
				['gb-na', 148],
				['gb-rl', 149],
				['gb-hk', 150],
				['gb-hy', 151],
				['gb-hr', 152],
				['gb-lt', 153],
				['gb-lw', 154],
				['gb-nh', 155],
				['gb-sq', 156],
				['gb-he', 157],
				['gb-st', 158],
				['gb-wc', 159],
				['gb-tk', 160],
				['gb-6338', 161],
				['gb-nb', 162],
				['gb-2367', 163],
				['gb-7113', 164],
				['gb-7114', 165],
				['gb-7115', 166],
				['gb-7116', 167],
				['gb-2364', 168],
				['gb-7118', 169],
				['gb-7119', 170],
				['gb-wt', 171],
				['gb-ms', 172],
				['gb-7117', 173],
				['gb-3265', 174],
				['gb-7130', 175],
				['gb-7131', 176],
				['gb-7132', 177],
				['gb-7133', 178],
				['gb-3266', 179],
				['gb-7121', 180],
				['gb-7123', 181],
				['gb-7124', 182],
				['gb-7125', 183],
				['gb-7126', 184],
				['gb-7127', 185],
				['gb-7128', 186],
				['gb-7129', 187],
				['gb-2366', 188],
				['gb-nt', 189],
				['gb-3267', 190],
				['gb-7134', 191],
				['gb-7135', 192],
				['gb-nl', 193],
				['gb-7136', 194],
				['gb-2377', 195],
				['gb-7137', 196],
				['gb-7138', 197],
				['gb-7139', 198],
				['gb-7140', 199],
				['gb-7141', 200],
				['gb-7142', 201],
				['gb-2381', 202],
				['gb-bd', 203],
				['gb-2388', 204],
				['gb-7143', 205],
				['gb-7144', 206],
				['gb-7145', 207],
				['gb-7146', 208],
				['gb-7147', 209],
				['gb-7149', 210],
				['gb-so', 211],
				['gb-7150', 212],
				['gb-7151', 213],
				['gb-pb', 214],
				['gb-iw', 215],
				['gb-mo', 216],
				['gb-ag', 217],
				['gb-el', 218],
				['gb-sm', 219],
				['gb-ci', 220],
				['gb-hl', 221],
				['gb-co', 222],
				['gb-cw', 223],
				['gb-nd', 224],
				['gb-dg', 225],
				['gb-cu', 226],
				['gb-sf', 227],
				['gb-mw', 228],
				['gb-lu', 229],
				['gb-wl', 230],
				['gb-3271', 231],
				['undefined', 232]
			];

			// Create the chart
			Highcharts.mapChart('container7', {
				chart: {
					map: 'countries/gb/gb-all'
				},

				title: {
					text: 'Racist incidents over population per country'
				},

				subtitle: {
					text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/gb/gb-all.js">United Kingdom</a>'
				},

				mapNavigation: {
					enabled: true,
					buttonOptions: {
						verticalAlign: 'bottom'
					}
				},

				colorAxis: {
					min: 0
				},

				series: [{
					data: data,
					name: 'Random data',
					states: {
						hover: {
							color: '#BADA55'
						}
					},
					dataLabels: {
						enabled: true,
						format: '{point.name}'
					}
				}, {
						name: 'Separators',
						type: 'mapline',
						data: Highcharts.geojson(Highcharts.maps['countries/gb/gb-all'], 'mapline'),
						color: 'silver',
						showInLegend: false,
						enableMouseTracking: false
					}]
			});
		
*/
}
