//No 6

function num (grade){
    if ( grade >= 90){
        return "A"
    }else if (grade >= 70){
        return "B"
    }else if (grade >= 60){
        return "C"
    }else if (grade >= 50){
        return "D"
    }else{
        return "F"
    }
}
console.log(num(80));

//SWITCH CASE
let score = 75;

switch (true) {
    case score >= 90:
        console.log("A");
        break;
    case score >= 70:
        console.log("B");
        break;
    case score >= 60:
        console.log("C");
        break;
    case score >= 50:
        console.log("D");
        break;
    default:
        console.log("F");
}

 //no 7
const school = {
    name: "Anchorsoft",
    location: "Ikeja",
    students: [
        {
        name: "Ganiayt",
        age:  20,
        grade: "B" 
        },
        {
        name: "lateef",
        age:  21,
        grade: "C" 
        },
        {
        name: "sodiq",
        age:  22,
        grade: "A"
        },
    ]
 }

    

// //no 5
// const Animal ={
//     name: "Goat",
//     age: 16,
//     species: "herbivores"
// }

// console.log(Animal.eat());
// eat (){

// }

// Sleep (){

// }
// console.log(Animal());

// extends {
//     Dog
// }



//no 4
let likes = [10, 20, 15, 30]
let comments = [5, 10, 8, 15]

const totall = likes.concat(comments);
let sum = 0;
for (let i = 0; i < total.length; i++) {sum += total[i]}
console.log(sum);


//N03
const BankAccount = {
    constructor(accountNumber){
        this.accountNumber = accountNumber
        this.balance = 0
    }
   // originalAmount = (amount)=> amount > 0
    //deposit(amount){
       // if(!this.originalAmount(amount)){
           // return (`invaid Amount`)
        }
        return this.balance += amount
   // } 
    //withdraw(amount){

    //}
//}


//No
const headerElement = document.querySelector("#header");

