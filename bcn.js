function carCheck() {
    if (document.getElementById('tourismCheck').checked) {
        document.getElementById('tourism').style.display = 'block';
    } else {
        document.getElementById('tourism').style.display = 'none';
    }

    if (document.getElementById('tractorCheck').checked) {
        document.getElementById('tractor').style.display = 'block';
    } else {
        document.getElementById('tractor').style.display = 'none';
    }

    if (document.getElementById('busCheck').checked) {
        document.getElementById('bus').style.display = 'block';
    } else {
        document.getElementById('bus').style.display = 'none';
    }

	if (document.getElementById('truckCheck').checked) {
        document.getElementById('truck').style.display = 'block';
    } else {
        document.getElementById('truck').style.display = 'none';
    }

   if (document.getElementById('motorbikeCheck').checked) {
        document.getElementById('motorbike').style.display = 'block';
    } else {
        document.getElementById('motorbike').style.display = 'none';
    }
}

function tourism() {
	let D = document.getElementById("D").value;
	let R = document.getElementById("R").value;
	let N = document.getElementById("N").value;
	
	fh = 0.08*Math.pow((0.785*Math.pow(D, 2)*R), 0.6)*N

	console.log(fh)

	if (fh < 8) {
		document.getElementById("THP").setAttribute("value", "23.47€");
	} else if (fh >= 8 && fh <= 11.99) {
		document.getElementById("THP").setAttribute("value", "64.06€");
	} else if (fh >= 12 && fh <= 15.99) {
		document.getElementById("THP").setAttribute("value", "136.69€");
	} else if (fh >= 16 && fh <= 19.99) {
		document.getElementById("THP").setAttribute("value", "172.05€");
	} else if (fh >= 20) {
		document.getElementById("THP").setAttribute("value", "217.28€");
	}
}

function tractor() {
	let D2 = document.getElementById("D2").value;
	let R2 = document.getElementById("R2").value;
	let N2 = document.getElementById("N2").value;
	
	fh = 0.08*Math.pow((0.785*Math.pow(D2, 2)*R2), 0.6)*N2

	if (fh < 16) {
		document.getElementById("THP").setAttribute("value", "35.34€");
	} else if (fh >= 16 && fh <= 25) {
		document.getElementById("THP").setAttribute("value", "55.53€");
	} else if (fh > 20) {
		document.getElementById("THP").setAttribute("value", "166.60€");
	}
}

function bus() {
	let seats = document.getElementById("seats").value;

	if (seats < 21) {
		document.getElementById("THP").setAttribute("value", "166.60€");
	} else if (seats >= 21 && seats <= 50) {
		document.getElementById("THP").setAttribute("value", "237.28€");
	} else if (seats > 50) {
		document.getElementById("THP").setAttribute("value", "296.60€");
	}
}

function truck() {
	let cargo = document.getElementById("cargo").value;

	if (cargo < 1000) {
		document.getElementById("THP").setAttribute("value", "84.56€");
	} else if (cargo >= 1000 && cargo <= 2999) {
		document.getElementById("THP").setAttribute("value", "166.60€");
	} else if (cargo > 2999 && cargo <= 9999) {
		document.getElementById("THP").setAttribute("value", "237.28€");
	} else if (cargo > 9999) {
		document.getElementById("THP").setAttribute("value", "296.60€");
	}
}

function motorbike() {
	let cc = document.getElementById("cc").value;

	if (cc <= 125) {
		document.getElementById("THP").setAttribute("value", "8.39€");
	} else if (cc > 125 && cc <= 250) {
		document.getElementById("THP").setAttribute("value", "14.38€");
	} else if (cc > 250 && cc <= 500) {
		document.getElementById("THP").setAttribute("value", "28.78€");
	} else if (cc > 500 && cc <= 1000) {
		document.getElementById("THP").setAttribute("value", "58.16€");
	} else if (cc > 1000) {
		document.getElementById("THP").setAttribute("value", "117.53€");
	}
}