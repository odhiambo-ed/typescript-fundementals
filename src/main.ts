import './style.css'

function displayMessage(result: string, comment: string, container: string) {
  const containerDiv = document.getElementById('container__app');
  if (containerDiv) {
    const appDiv = document.createElement(`${container}`);
    appDiv.setAttribute('id', 'app');
    containerDiv.appendChild(appDiv);
    const messageParagraphOne = document.createElement('p');
    const messageParagraphTwo = document.createElement('p');
    appDiv.appendChild(messageParagraphOne);
    appDiv.appendChild(messageParagraphTwo);
    messageParagraphOne.textContent = `// ${comment}`;
    messageParagraphTwo.textContent = result;
  }
}

// Basic Data Types
let firstName: string = 'Edward';
let greeting: string = `Hi there! ${firstName} God loves you`;
displayMessage(greeting, 'String', 'div')

let age: number = 32;
let myAge: string = `Your age is ${age}`;
displayMessage(myAge, 'Number', 'div')