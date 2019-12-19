let firstDiv = document.querySelector('div');
console.log(firstDiv);

let allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

let body = document.getElementsByTagName('body')[0]; //one way for last div
let lastDiv = body.lastChild.previousElementSibling;
console.log(lastDiv);

let latestDiv = document.getElementsByTagName('div')[2]; //another way for last div
console.log(latestDiv);

let lastDivHeader3 = lastDiv.lastElementChild;
console.log(lastDivHeader3);

let lastDivHeader1 = lastDivHeader3.previousElementSibling; //One way for h1
console.log(lastDivHeader1);

let lastDivH1 = lastDiv.firstElementChild; //Another way for h1
console.log(lastDivH1);

let paragraphText = document.getElementsByTagName('div')[1].firstElementChild.innerText;
console.log(paragraphText);

let secondTextDiv = document.getElementsByTagName('div')[1].lastElementChild;
secondTextDiv.innerText += ' text';

lastDivHeader1.innerText = '';
lastDivHeader1.innerText = 'THE TEXT IS CHANGED';

lastDivHeader3.innerText = '';
lastDivHeader3.innerText = 'This text is also changed!';
