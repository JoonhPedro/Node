require("dotenv").config();

const db = require("./db")

const express = require("express");

//Vai subir a aplicação !
const app = express();

app.use(express.json());

app.post("/clientes", (request, response) => {
    const customer = request.body;
    db.insertCustomer(customer);
    response.sendStatus(201);
});

app.get("/cliente/:id", (request, response) => {
    const id = parseInt(request.params.id);

    response.json(db.selectCustomer(id));
});

app.get("/clientes" , (request, response) => {
    response.json(db.selectCustomers());
});

app.get("/", (request, response, next) => {
    response.json({
        message: "Show"
    });
});

app.listen(process.env.PORT, () => {
    console.log("App está rodando!")
}); 

