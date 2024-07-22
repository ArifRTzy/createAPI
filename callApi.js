const fetch = require('node-fetch');

// POST request
const postApiUrl = 'http://localhost:8080/tshirt/123';
const postData = {
    logo: 'MyCoolLogo'
};

fetch(postApiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
.then(response => response.json())
.then(data => console.log('POST response:', data))
.catch(error => console.error('POST Error:', error));

// GET request
const getApiUrl = 'http://localhost:3000/tshirt/123';

fetch(getApiUrl)
    .then(response => response.json())
    .then(data => console.log('GET response:', data))
    .catch(error => console.error('GET Error:', error));
