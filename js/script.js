function getTriangleType() {

	var a = parseInt(document.getElementById("aValue").value);
	var b = parseInt(document.getElementById("bValue").value);
	var c = parseInt(document.getElementById("cValue").value);

	if(a == b && b == c) {
		document.getElementById('answer').innerHTML = 'Equilateral Triangle'
	}
	else if (a == b || a == c || b == c){
		document.getElementById('answer').innerHTML = 'Isoceles Triangle'
	}
	else if (a != b != c) {
		document.getElementById('answer').innerHTML = 'Not a Triangle'
	}
	