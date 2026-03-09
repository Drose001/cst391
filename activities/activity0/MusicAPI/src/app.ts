// Import the Express framework so we can create a web server
import express from "express";

// Create an Express application instance
const app = express();

// Set the port number the server will run on
const port = 3000;

// Define a route for the root URL
app.get("/", (req, res) => {
    // Send a response back to the browser
    res.send("Music API is running");
});

// Start the server and listen on the specified port
app.listen(port, () => {
    // Print a message to the terminal when the server starts
    console.log(`Server running at http://localhost:${port}`);
});