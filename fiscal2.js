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
		document.getElementById("THP").setAttribute("value", "22.90€");
	} else if (fh >= 8 && fh <= 11.99) {
		document.getElementById("THP").setAttribute("value", "61.83€");
	} else if (fh >= 12 && fh <= 15.99) {
		document.getElementById("THP").setAttribute("value", "130.52€");
	} else if (fh >= 16 && fh <= 19.99) {
		document.getElementById("THP").setAttribute("value", "162.58€");
	} else if (fh >= 20) {
		document.getElementById("THP").setAttribute("value", "203.20€");
	}
}

function tractor() {
	let D2 = document.getElementById("D2").value;
	let R2 = document.getElementById("R2").value;
	let N2 = document.getElementById("N2").value;
	
	fh = 0.08*Math.pow((0.785*Math.pow(D2, 2)*R2), 0.6)*N2

	if (fh < 16) {
		document.getElementById("THP").setAttribute("value", "32.06€");
	} else if (fh >= 16 && fh <= 25) {
		document.getElementById("THP").setAttribute("value", "50.38€");
	} else if (fh > 20) {
		document.getElementById("THP").setAttribute("value", "151.13€");
	}
}

function bus() {
	let seats = document.getElementById("seats").value;

	if (seats < 21) {
		document.getElementById("THP").setAttribute("value", "151.13€");
	} else if (seats >= 21 && seats <= 50) {
		document.getElementById("THP").setAttribute("value", "215.25€");
	} else if (seats > 50) {
		document.getElementById("THP").setAttribute("value", "269.06€");
	}
}

function truck() {
	let cargo = document.getElementById("cargo").value;

	if (cargo < 1000) {
		document.getElementById("THP").setAttribute("value", "76.71€");
	} else if (cargo >= 1000 && cargo <= 2999) {
		document.getElementById("THP").setAttribute("value", "151.13€");
	} else if (cargo > 2999 && cargo <= 9999) {
		document.getElementById("THP").setAttribute("value", "215.25€");
	} else if (cargo > 9999) {
		document.getElementById("THP").setAttribute("value", "269.06€");
	}
}

function motorbike() {
	let cc = document.getElementById("cc").value;

	if (cc <= 125) {
		document.getElementById("THP").setAttribute("value", "8.02€");
	} else if (cc > 125 && cc <= 250) {
		document.getElementById("THP").setAttribute("value", "13.73€");
	} else if (cc > 250 && cc <= 500) {
		document.getElementById("THP").setAttribute("value", "27.49€");
	} else if (cc > 500 && cc <= 1000) {
		document.getElementById("THP").setAttribute("value", "54.94€");
	} else if (cc > 1000) {
		document.getElementById("THP").setAttribute("value", "109.91€");
	}
}