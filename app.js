document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from mock API
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        // Display dynamic content on the page
        document.getElementById('product-info').innerHTML = `
          <h2>${data.title}</h2>
          <p>${data.completed ? 'Available' : 'Out of stock'}</p>
        `;
      })
      .catch(error => console.error('Error fetching data:', error));
  });