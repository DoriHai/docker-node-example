const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT || 7777;

// Define a route that responds with "Hello, World!"
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server listening on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
