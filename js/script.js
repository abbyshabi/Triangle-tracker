function getTriangleType() {

	var X = ['','',''];

	X[0] = parseInt(document.getElementById("aValue").value);
	X[1] = parseInt(document.getElementById("bValue").value);
	X[2] = parseInt(document.getElementById("cValue").value);

	if(X[0] == X[1]  && X[1]  == X[2]) {
		document.getElementById('answer').value = 'An Equilateral: An equilateral triangle is a triangle with three equal sides'
	}
	else if (X[0] == X[1]  || X[0] == X[2]|| X[1]  == X[2]){
		document.getElementById('answer').value = 'An Isoceles : An Isoceles triangle is a triangle with two equal sides and the third side is different'
	}
	else if (X[0] != X[1]  != X[2]) {
		//console.log(a+b)
		if (((X[0] + X[1] ) <= X[2]) || ((X[0] + X[2]) <= X[1] ) || ((X[2] + X[1] ) <= X[0])) {
		document.getElementById('answer').value = 'Not a Triangle'
	} 
	else {
		document.getElementById('answer').value = 'A Scalene : A scalene triangle doesn\'t have any equal side, all the sides are different from one another'
	}
}
	
}
function reset()  {
	document.getElementById("aValue").value = '';
	document.getElementById("bValue").value = '';
	document.getElementById("cValue").value = '';
	document.getElementById('answer').value = '';
}  