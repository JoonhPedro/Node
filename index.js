require("dotenv").config();

const express = require("express");

//Vai subir a aplicação !
const app = express()

app.get("/", (request, response, next) => {
    response.json({
        message: "Show"
    })
})

app.listen(process.env.PORT, () => {
    console.log("App está rodando!")
}); 

