var express = require("express");
var app = express();
var port = process.env.port || 3000;

/**
 * Endpoints
 */
// Usage: http://localhost:3000/addTwoNumbers?n1=1&n2=5
// NB: A GET request means that any data in your request must be in teh URL, as in the above.
app.get("/addTwoNumbers", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = n1 + n2;
    res.json({ 
        statuscode: 200,
        data: result });
})

// Alternative to the above using params instead of query
app.get("/addTwoMoreNumbers/:n1/:n2", (req, res) => {
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    const result = n1 + n2;
    res.json({ 
        statuscode: 200,
        data: result
    })
})

/**
 * Start server
 */
app.listen(port, () => {
    console.log("App lstening to:", port);
})
