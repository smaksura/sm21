//1. json
const id = {
    name:"Rahim",
    age:31,
    hobby:"playing",
};

const products = JSON.stringify(id)
console.log(products);

const new_products = JSON.parse(products);
console.log(new_products);

