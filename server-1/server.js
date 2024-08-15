import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const now = new Date();

const date = now.toDateString(); // Converts to a readable date string
const time = now.toTimeString(); // Converts to a readable time string


// Set up a route to respond to GET requests to the root URL
app.get('/', (req, res) => {
    res.send(`Hii Shobika !!   Time:${time}`);
});

// Make the server listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});