let kgInput = prompt('Please input your weight: ');
let kg = parseInt(kgInput);
let chickenWeight = 0.5;

function weightInChickens(kg, chickenWeight) {
	if (Number.isNaN(kg)) {
		alert('Please use only numbers!');
	} else {
		let result = kg * chickenWeight;
		let mainContent = document.getElementById('mainContent');
		mainContent.innerText += ' ' + result + '🐔';
	}
}

weightInChickens(kg, chickenWeight);
