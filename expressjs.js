const express = require("express");
const path = require("path");
const port = 3000;
const app = express();

// Find all static files in this path. The "." points to the folder or the current directory
app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
});



app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
});