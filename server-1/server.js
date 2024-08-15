import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

// Set up a route to respond to GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Hii Shobika');
});

// Make the server listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});