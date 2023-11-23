const customers = [{
    id: 1,
    nome: "Jonh",
    idade: 18,
    uf: "Ce"
},
{
    id: 2,
    nome: "Darlan",
    idade: 17,
    uf: "Ce"
}];

function selectCustomers(){
    return customers;
};

function selectCustomer(id){
    return customers.find(c => c.id === id);
};

function insertCustomer(){
    customers.push(customers);
};

module.exports = {
    selectCustomers,
    selectCustomer,
    insertCustomer
};