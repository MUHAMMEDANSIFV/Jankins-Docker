const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 4000; // Set your desired port

app.get('/', (req, res) => {
  // Read the HTML file and send it as a response
  const htmlFilePath = path.join(__dirname, 'index.html'); // Replace with the path to your HTML file
  fs.readFile(htmlFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the HTML file.');
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
