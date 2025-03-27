const express = require('express');
const app = express();
const PORT = process.env.PORT || 3033; // Change default port to 3033



// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const routes = require('./routes');
app.use(routes);


app.use(express.static(__dirname)); // Serve static files



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
