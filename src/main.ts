import './style.css'

function displayMessage(message: string) {
  const appDiv = document.getElementById('app');
  if (appDiv) {
    const messageParagraph = document.createElement('p');
    appDiv.appendChild(messageParagraph);
    messageParagraph.textContent = message;
  }
}

// Basic Data Types
let firstName: string = 'Edward';
let greeting: string = `Hi there! ${firstName} God loves you`;
displayMessage(greeting)