function check() {
	var p = 0;

	var q1 = document.getElementsByName('q1');

for (var i = 0, length = q1.length; i < length; i++)
{
 if (q1[i].checked)
 {

 	if (q1[i].value == "true") {
 		p = p+1 
 		document.getElementById("msg1").innerHTML = "Correct!"} 
 		else {document.getElementById("msg1").innerHTML = "Wrong answer. The correct one was Germany"};

  break;
 }
}

var q2 = document.getElementsByName('q2');

for (var i = 0, length = q2.length; i < length; i++)
{
 if (q2[i].checked)
 {

 	if (q2[i].value == "true") {
 		p = p+1 
 		document.getElementById("msg2").innerHTML = "Correct!"} 
 		else {document.getElementById("msg2").innerHTML = "Wrong answer. The correct one was 1910"};

  break;
 }
}

var q3 = document.getElementsByName('q3');

for (var i = 0, length = q3.length; i < length; i++)
{
 if (q3[i].checked)
 {

 	if (q3[i].value == "true") {
 		p = p+1 
 		document.getElementById("msg3").innerHTML = "Correct!"} 
 		else {document.getElementById("msg3").innerHTML = "Wrong answer. The correct one was 227€"};

  break;
 }
}

var q4 = document.getElementsByName('q4');

for (var i = 0, length = q4.length; i < length; i++)
{
 if (q4[i].checked)
 {

 	if (q4[i].value == "true") {
 		p = p+1 
 		document.getElementById("msg4").innerHTML = "Correct!"} 
 		else {document.getElementById("msg4").innerHTML = "Wrong answer. The correct one was 750kgCO2"};

  break;
 }
}

var q5 = document.getElementsByName('q5');

for (var i = 0, length = q5.length; i < length; i++)
{
 if (q5[i].checked)
 {

 	if (q5[i].value == "true") {
 		p = p+1 
 		document.getElementById("msg5").innerHTML = "Correct!"} 
 		else {document.getElementById("msg5").innerHTML = "Wrong answer. The correct one was 20.24"};

  break;
 }
}

var q6 = document.getElementsByName('q6');

for (var i = 0, length = q6.length; i < length; i++)
{
 if (q6[i].checked)
 {

 	if (q6[i].value == "true") {
 		p = p+1 
 		document.getElementById("msg6").innerHTML = "Correct!"} 
 		else {document.getElementById("msg6").innerHTML = "Wrong answer. The correct one was 8"};

  break;
 }
}

var q7 = document.getElementsByName('q7');

for (var i = 0, length = q7.length; i < length; i++)
{
 if (q7[i].checked)
 {

 	if (q7[i].value == "true") {
 		p = p+1 
 		document.getElementById("msg7").innerHTML = "Correct!"} 
 		else {document.getElementById("msg7").innerHTML = "Wrong answer. The correct one was A3, A4, A6, A8 & TT"};

  break;
 }
}

var q8 = document.getElementsByName('q8');

for (var i = 0, length = q8.length; i < length; i++)
{
 if (q8[i].checked)
 {

 	if (q8[i].value == "true") {
 		p = p+1 
 		document.getElementById("msg8").innerHTML = "Correct!"} 
 		else {document.getElementById("msg8").innerHTML = "Wrong answer. The correct one was Ingolstadt"};

  break;
 }
}

var q9 = document.getElementsByName('q9');

for (var i = 0, length = q9.length; i < length; i++)
{
 if (q9[i].checked)
 {

 	if (q9[i].value == "true") {
 		p = p+1 
 		document.getElementById("msg9").innerHTML = "Correct!"} 
 		else {document.getElementById("msg9").innerHTML = "Wrong answer. The correct one was 1932"};

  break;
 }
}

var q10 = document.getElementsByName('q10');

for (var i = 0, length = q10.length; i < length; i++)
{
 if (q10[i].checked)
 {

 	if (q10[i].value == "true") {
 		p = p+1 
 		document.getElementById("msg10").innerHTML = "Correct!"} 
 		else {document.getElementById("msg10").innerHTML = "Wrong answer. The correct one was Volkswagen group"};

  break;
 }
}
console.log(p)
var txt = document.getElementById('txt')

if (p == 10) {
	txt.innerHTML = "Congratulations! You got 10/10!"
} else if (p < 10 && p > 6) {
	txt.innerHTML = "Well done! You got " + p + "/10!"
} else if (p <= 6 && p > 3) {
	txt.innerHTML = "Not bad. You got " + p + "/10!"
} else if (p <= 3) {
  txt.innerHTML =	"What a disaster! You got" + p + "/10!"
}

}