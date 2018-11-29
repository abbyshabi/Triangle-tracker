function getTriangleType() {

	var a = parseInt(document.getElementById("aValue").value);
	var b = parseInt(document.getElementById("bValue").value);
	var c = parseInt(document.getElementById("cValue").value);

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