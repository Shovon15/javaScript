const friends =[12, 14, 13, 23, 29, 84, 93, 83, 51, 90, 30];
// console.log(Array.isArray(friends)); // to check that array or not
// console.log(friends.includes(29)); // to check this element available or not

// concat 2 array-----------------------------------
const newFriends =[83, 72, 62, 65, 37, 54];
const allFriends = newFriends.concat(friends);
// console.log(allFriends);


// slice--------------------------------------------
const slice = friends.slice(3,7);
// console.log(slice);

// splice-----------------------------------------
const splice = friends.splice(3,2); // remove elements from star and how many items wants to remove.
const splice2 = friends.splice(3,2, 90, 100); //next two element add in this empty index..
// console.log(splice);
// console.log(friends);

// remove duplicate elements--------------------------------
const names =['abul', 'babul','cakub','dabul','abul', 'babul','cakub','dabul','kabul','habul', 'cabul'];


function removeDuplicate(names){
    const unique = [];
    for (let i = 0 ; i < names.length; i++){
        const name = names[i];
        if (unique.includes(name)=== false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);

// by 3 and 5 divisible loop----------------------------
for(let i= 1; i<= 50 ; i++){
    if(i% 3 === 0){
        if(i% 5=== 0){
            // console.log('foobar', i);
        }else{
            // console.log('foo', i);
        }

    }else if(i % 5 === 0){
        if(i% 3=== 0){
            // console.log('foobar', i);
        } else {
        // // console.log('not devisible by 3 and 5', i);
      }     
    }
}


// function calculate wood required-------------------------

function woodCalculator(chairQuan, tableQuan, bedQuan){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWood = chairQuan * perChairWood;
    const tableWood = tableQuan * perTableWood;
    const bedWood = bedQuan * perBedWood;
   const  totalWood = chairWood + tableWood + bedWood;
   return totalWood;

}
const totalWood = woodCalculator(2,2,5);
// console.log("total wood required:", totalWood);


// find the lowest price----------------------

const product = [
    {name:'Samsung', camera: 12, storage: "32gb", price: 106000},
    {name:'vivo', camera: 12, storage: "32gb", price: 62000},
    {name:'iphone', camera: 12, storage: "32gb", price: 62000},
    {name:'htc', camera: 12, storage: "32gb", price: 95000},
    {name:'htc2', camera: 12, storage: "32gb", price: 85000},
    {name:'htc3', camera: 12, storage: "32gb", price: 75000}
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i< phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(product);
// console.log(mySelection);


// calculate total price ------------------------------------------


const shoppingCart = [
    {name: 'shoe', price:200, quantity: 2},
    {name: 'shart', price:200, quantity: 5},
    {name: 'pant', price:800, quantity: 4},
    {name: 'belt', price:600, quantity: 1}
];
function totalCost (products){
    let totalPrice= 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        totalPrice = totalPrice + product.price;
    }
    return totalPrice;
}

const expense = totalCost(shoppingCart);
// console.log(expense);

// -----------Quantity-----------

const shoppingCart2 = [
    {name: 'shoe', price:200, quantity: 2},
    {name: 'shart', price:200, quantity: 5},
    {name: 'pant', price:800, quantity: 4},
    {name: 'belt', price:600, quantity: 1}
];
function totalCost (products2){
    let totalPrice2= 0;
    for(let i = 0; i < products2.length; i++){
        const product2 = products2[i];
        const productTotal2 = product2.price * product2.quantity;
        totalPrice2 = totalPrice2 + productTotal2;
    }
    return totalPrice2;
}

const expense2 = totalCost(shoppingCart2);
// console.log("Total expense:", expense2 ,"Tk");


// first 100 ticket------> 100 tk.
// 101 - 200 ------------> 90 tk
// 200+ -------------> 70 tk


function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    } else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity -100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalTicketPrice = first100Price + restTicketPrice;
        return totalTicketPrice;
    }else if (ticketQuantity >= 200){
        const first100Price = 100 * first100Rate;
        const less200TicketPrice = 100 * second100Rate ;
        const more200TicketQuantity = ticketQuantity - 200;
        const more200TicketPrice = more200TicketQuantity * restRate ;
        const totalTicketPrice = first100Price + less200TicketPrice + more200TicketPrice;
        return  totalTicketPrice;
    }
}

const price = ticketPrice(202);
console.log(price);



// 


// -------------------






//  var str = "JavaScript replace method test";
// var res = str.replace("test", "success"); 
// console.log(res);