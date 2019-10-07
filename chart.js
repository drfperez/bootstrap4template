function execute() {

	var cons = document.getElementById("consumption").value;
	var emis = document.getElementById("emissions").value;

	var ly = cons * 150
	var CO2y = emis * 15

	var ctx = document.getElementById("graph");
	var graph = new Chart(ctx, {
		type: "line",
		data: {
			labels: [1,2,3,4,5,6,7,8,9,10],
			datasets: [{
				data: [ly, 2*ly, 3*ly, 4*ly, 5*ly, 6*ly, 7*ly, 8*ly, 9*ly, 10*ly],
				label: "Litres",
				borderColor: "#990033",
				fill: false,
			}, {
				data: [CO2y, 2*CO2y, 3*CO2y, 4*CO2y, 5*CO2y, 6*CO2y, 7*CO2y, 8*CO2y, 9*CO2y, 10*CO2y],
				label: "Kilograms of CO2",
				borderColor: "#336600",
				fill: false,
				}
			]
		},
	});

	document.getElementById("msg").innerHTML = "Using 15000km per year (that is the world mean), this car will consume about " + cons + " litres of fuel, and emit an amount of " + emis +" kilograms of CO2. Here you have a chart with the relations of both values."
}
