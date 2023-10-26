const express = require("express");
const bodyParser = require("body-parser");
//Server Runtime
const app = express();
//Allows us to read JSON data 
app.use(bodyParser.json());

const messages = [];

//Folder that contains back end
app.use(express.static("public"));

//Pushes message into array that will be sent to back end
app.post("/api/send", (req,response) => {
    const message = req.body.message;
    console.log(message);
    //Saves messages to array
    messages.push(message);
})

//Sends Message to Backend
app.get("/api/messages", (req,res) => {
    res.send({
        messages: messages
    });
})

//Use node "file name" to make this work in browser as a server
app.listen(3000, () => {
    console.log("server is listening");
})