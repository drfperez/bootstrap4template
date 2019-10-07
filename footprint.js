
function footprint() {
	let price = new Number(document.getElementById('price').value);
	let co2price = new Number(750)
	let emissions = new Number(document.getElementById("emissions").value);
	let currency = document.getElementById("currency").value;
	let d = new Number(15000);

	if (currency == "eur") {
		price = price/1.12758417; 
	} else if (currency == "usd") {
		price = price/1.28694;
	} else if (currency == "jpy") {
		price = price/145.269218;
	} else {
		price = price;
	}

	document.getElementById("co2").setAttribute("value", ((price*co2price)/100)+((emissions*d)/1000))
}