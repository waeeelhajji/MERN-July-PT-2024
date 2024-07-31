const express = require('express')
// import express from "express"
// console.log(express)
const app = express()


// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];




// req is shorthand for request
// res is shorthand for response
//==========Routes=======
// dummy
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
    // res.send("<h1>Hello from the Server</h1>")
});



//===== GET ALL Route =======

app.get("/api/users", (req, res) => {
    res.json(users)
})

//===== CREATE Route =======
app.post("/api/users", (req, res) => {
    users.push(req.body)
    res.json({ status: "ok" })

})

app.get("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.id);
    // assuming this id is the index of the users array we could return one user this way
    res.json(users[req.params.id]);
});































//! To start a server at the VERY BOTTOM of the file 
app.listen(5000, () => {
    console.log(`>>>> Server is up and running on Port 5000 and it is listening for REQuest and RESponce`)
})

















