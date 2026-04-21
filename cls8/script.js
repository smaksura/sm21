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

function blockingTask(){
    console.log("start");
    setTimeout(()=>{
        console.log("Async end");
    },3000);
       setTimeout(() => 
     {console.log("end")},5000 );
}

 blockingTask(),
 console.log("After task");

let users
const url = "https://jsonplaceholder.typicode.com/";
fetch("https://jsonplaceholder.typicode.com/")
.then( res => res.json() )
.then(json => console.log(json))


