/*const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // Store the data in a JSON object
  const data = {
    name,
    email,
    password
  };

  // Convert the JSON object to a string
  const jsonData = JSON.stringify(data);

  // Write the data to a file
  const fs = require('fs');
  fs.writeFileSync('registration.json', jsonData);

  // Clear the form
  form.reset();

  // Display a success message
  alert('Registration successful!');
});
*/

function register(){
        alert("registration successful");
        
}