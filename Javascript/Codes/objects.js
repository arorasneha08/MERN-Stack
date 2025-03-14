// creating objects :-
const product = {
    id : 1 ,
    pName : "laptop", 
}; 

// creating methods in objects :-
let person = {
    name : "vinod",
    age : 30 , 
    isStudent : false ,
    "isyoung" : true , // special case 
    greet : function (){
        console.log("hello everyone");
    },
};

console.log(person.age); // 30
console.log(person.name); // vinod
console.log(person.isStudent); // false
// special case 
console.log(person["isyoung"]); // true 
// console.log(person["name"]); // vinod
console.log(person.greet()); // hello everyone  undefined


// adding new objects in the class 
person.job = "web developer";
person.age = 18 ;  // updated value 
console.log(person);

// update value of an element :- double quotes are compulsory 
person["age"] = 45 ;
console.log(person);

// another example :-

let idType = "student Id";
var student = {
    [idType] : "1345544",
    sName :"Vinod", 
    age : 29, 
    isStudent : true ,
    greet : function () {
        console.log(
            `hey , my ${idType} is ${student[idType]} and my name is ${student.sName}`
        );      
    },
};

console.log(student.greet()); // hey , my student Id is 1345544 and my name is Vinod

// data modeling :- show the data in the form of the class beautifully
// as like above 

// pass by values :- the copy of the data is send not the original values 
let a = 10 ; 
const modifyValue = (x)=>{
    x = 20 ; 
    return x ; 
};
console.log(modifyValue(a)); // 20
console.log(a); // 10 

// pass by reference : this will pass the exact address of the object 
// any changes gone through the function will affect the original value 

// copying objects :- 

let obj = {
    id : 5 , 
    name : "kodyfier", 
}
var obj1 = obj ; 
console.log(obj1); // { id: 5, name: 'kodyfier' }
console.log("original : " , obj); // original :  { id: 5, name: 'kodyfier' }

// assign method :-

let newObj = Object.assign({} , obj);
newObj.name = "sneha";
console.log (newObj); //  { id: 5, name: 'sneha' }
console.log(obj); // { id: 5, name: 'kodyfier' }

// comparison of two objects :-

const Obj1 = {name : "vinod"};
const Obj2 = {name : "vinod"};
const Obj3 = Obj1 ; 
const isEqual1 = (Obj1 == Obj2)? true : false ; // false

// two objects are only equal if they refer to the same object 
// independent objects are not equal

const isEqual2 = (Obj1 == Obj3)? true : false ; // true
console.log(isEqual1);  // false 
console.log(isEqual2);  // true

// JSON

let student1 = {
    [idType] : "1345544",
    sName :"Vinod", 
    age : 29, 
    isStudent : true ,
    greet : function () {
        console.log(
            `hey , my ${idType} is ${student[idType]} and my name is ${student.sName}`
        );      
    },
};

let jsonData = JSON.stringify(student1); 
console.log(jsonData); // {"student Id":"1345544","sName":"Vinod","age":29,"isStudent":true}
let parsedObject = JSON.parse(jsonData);
console.log(parsedObject); // { 'student Id': '1345544', sName: 'Vinod', age: 29, isStudent: true }

// this object :- 
// it refers to the object 
const obj3 = {
    name : "sneha", 
    greet(){
        console.log(this);
    },
}; 
obj3.greet(); // { name: 'sneha', greet: [Function: greet] }

// in a normal function it refers to the object but if the same greet function is written using the fat arrow way then it will give the window object 

const obj4 = {
    name : "sneha", 
    greet : ()=>{
        console.log(this);
    },
}; 
obj4.greet(); // {} // Window object 

// object properties :- 
const prod = {
    id : 1 , 
    name: "laptop",
    category : "computers", 
    brand : "examplebrand",
    price : 999.90 , 
    stock : 50 , 
    description : "Powerful laptop with a quad-core processor", 
    image : "iamge link is in the description box ."
}; 

// object.keys():- 
let keys = Object.keys(prod); 
console.log(keys);

// object.values():- 
let values = Object.values(prod); 
console.log(values);

// object entries ():- returns an array of all opf the key value pairs 
let entries = Object.entries(prod);
console.log(entries);

// has Property Of ():- return boolean defining whether the product has specific property as an oen property 
console.log(prod.hasOwnProperty("name")); // true 

// Object.assign():- copuies th values of all properties from one or more source objects to a target object 
const target = {a : 1 , b : 2};
const source = {b : 3 , c : 4};
const mergedObject = Object.assign(target, source); 
console.log(mergedObject); // { a: 1, b: 3, c: 4 }

// Object.freeze():- prevents new properties fro adding into it and also do not allow to change the existing properties 
Object.freeze(prod);
prod.id = 1232; 
console.log(prod); // the id still remains 1 , it does not change 

// quesntions :-

// 1) given a student class and you have to add a new property using the function
let stud = {
    name : "bob", 
    age : 20 , 
    grades :{
        math: 90, 
        science: 86 , 
        history: 88 , 
    },
}; 

const addSubjectGrade = (stud , subject , marks)=>{
    return (stud.grades[subject] = marks);
}; 

addSubjectGrade(stud , "computer" , 65);
console.log(stud); // {
    // name: 'bob',
    // age: 20,
    // grades: { math: 90, science: 86, history: 88, computer: 65 }
    //}

// ques 2 : write a function that compares two objects to determine if they have the same properties and values 

let object1 = {name : "Alice", age : 26 , city : "New York"}; 
let object2 = {name : "Alice" , age : 26 , city : "New York"};
let object3 = {name : "Bob", age : 30 , city : "San Francisco"};

const areObjectsEqual= (object1, object2)=>{
    let o1 = Object.keys(object1); 
    let o2 = Object.keys(object2); 

    if(o1.length !== o2.length){
        console.log("There keys are not same");
        return false;
    }
    for(let key in object1){
        if(object1[key] != object2[key]){
            return false ; 
        }
    }
    return true; 
}; 
console.log(areObjectsEqual(object1, object2)); // true 
console.log(areObjectsEqual(object1, object3)); // false 

// write a function that transform an array of objects into an object where the keys are the object ids 

let inputArray = [
    {id : 101 , name : "Alice"}, 
    {id : 201 ,  name : "Bob"},
    {id : 301 , name : "charlie"}, 
]; 
const arrayToObj = (arr) =>{
    let obj = {}; 
    for(let key of arr){
        obj[key.id] = key ; 
    }
    return obj ; 
};
console.log(arrayToObj(inputArray));
// {
//   '1': { id: 1, name: 'Alice' },
//   '2': { id: 2, name: 'Bob' },
//   '3': { id: 3, name: 'charlie' }
// }


