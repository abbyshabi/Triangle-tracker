function getTriangleType() {

	var X = ['','',''];

	X[0] = parseInt(document.getElementById("aValue").value);
	X[1] = parseInt(document.getElementById("bValue").value);
	X[2] = parseInt(document.getElementById("cValue").value);
	
	if(a == b && b == c) {
		document.getElementById('answer').value = 'Equilateral'
	}
	else if (a == b || a == c || b == c){
		document.getElementById('answer').value = 'Isoceles'
	}
	else if (a != b != c) {
		//console.log(a+b)
		if (((a + b) <= c) || ((a + c) <= b) || ((c + b) <= a)) {
		document.getElementById('answer').value = 'Not a Triangle'
	} 
	else {
		document.getElementById('answer').value = 'Scalene'
	}
}
	
}
function reset()  {
	document.getElementById("aValue").value = '';
	document.getElementById("bValue").value = '';
	document.getElementById("cValue").value = '';
	document.getElementById('answer').value = '';
}  