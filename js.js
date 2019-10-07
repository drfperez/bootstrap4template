    function totalPrice()
        {
            // Obtain the values from the inputs in the index.
            let fuel1 = new Number(document.getElementById("fuel1").value);
            let price1 = new Number(document.getElementById("price1").value);
            let consumption1 = new Number(document.getElementById("consumption1").value);
            let fuel2 = new Number(document.getElementById("fuel2").value);
            let price2 = new Number(document.getElementById("price2").value);
            let consumption2 = new Number(document.getElementById("consumption2").value);
            let d = new Number(15000);


    
            document.getElementById("years").setAttribute("value", Math.round(((Math.abs(price2-price1)/(d*(Math.abs(consumption1*fuel1 - consumption2*fuel2)))*100)*100))/100);
        }      