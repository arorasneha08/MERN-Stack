// first class Function :- it means that functions are treated as values assigneed to the variables and passed around as a parameter 

//higher order function :- it is a function that takes one or more functions as arguments or returns a function as a result .

//callback functions :-
// it is a function that passed as an argument to another function and is executed after the completion of the task


// ex :- 
function processUserInput(name , callback){
    console.log("Received input : " + name);
    callback(name); 
}
function greetUser(name){
    console.log(`hello , ${name}`);
}
processUserInput("Vinod", greetUser); 

// Output :- 
// Received input : Vinod
// hello , Vinod

// important :- 
// Here processUserInput is a Higher order function and greetUser is a callback function 

// example :-

const mathOperation = (a,b,operation)=>{   // higher order function
    return operation(a,b); 
};
const add = (a,b)=>{ // callback function
    return a+ b ; 
};
const sub = (a,b) =>{   // callback function
    return b - a ; 
};
console.log(mathOperation(5,15,add)); // 20
console.log(mathOperation(5,15,sub));  // 10 

// callback hell :- also known as pyramid of Doom . it refers to the situation where multiple nested callbacks are used to handle asynchronous actions 

// const getStudentData = () => {
//     setTimeout(()=>{
//         console.log("Hi my name is Sneha");
//         setTimeout(()=>{
//             console.log("Sneha");
//             setTimeout(()=>{
//                 console.log(" is ");
//                 setTimeout(()=>{
//                     console.log("name");
//                     setTimeout(()=>{
//                         console.log(" my ");
//                     },1000); 
//                 },1000); 
//             },1000); 
//         },1000); 
//     }, 1000); 
// }; 
// getStudentData(); 

// promises :
// used for the result of an asynchronous 

const pr = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Hi I am missing you"); // resolev is used when the promise is fulfilled 
    },2000); 
});
pr.then((response)=>{
    console.log(response); // it is used to deal with the resolved promise if the promise if fulfilled 
});
pr.catch((error)=>{
    console.log(error);  // used to deal with the reject part if the promise is not fulfilled 
})
pr.finally(()=>{
    console.log("do not worry we also miss you"); // this finally clause will always execute even if the promise is fulfilled or not .
}); 

// example :- 
const studentName = "Sneha"; 
const enrollStudent = (studentName)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isSuccessful = Math.random() > 0.4 ; 
            if(isSuccessful){
                resolve("enrollment successful"  + studentName); 
            }
            else{
                reject("enrollment failed" + studentName); 
            }
        },2000); 
    }); 
}; 
enrollStudent(studentName)
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("enrollment process completed");
});

// methods :- 
// 1) Promise.all() is used when you want to wait for all promises to complete successfully . reject state will throw an error 

// promise.allSettled() :- is used when you want to wait for all promises to complete regardless of success or failure and get information about their outcomes 

// Promise.race() :- it is used when you are interested in the result of the first promise that completes, regardless of success or failure 

// var promise1 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("first")
//     },2000); 
// }); 

// var promise2 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("second"); 
//     },5000); 
// });
// var promise3 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("third");
//     },2000); 
// }); 

// Promise.all([promise1, promise2 , promise3]) // the order in which the promises are passed they are printed in the same way 

// .then((values)=>{
//     console.log(values); // [ 'first', 'second', 'third' ]
// })
// .catch((error)=>{
//     console.log(error); 
// }); 

// promise.allsettled :- here if any one of the promise is rejected then then only failed is printed . if we use promise.all so we use .allsettled when will give the status of every promise .. 

var promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("first")
    },2000); 
}); 

var promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("failed"); 
    },5000); 
});
var promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("third");
    },2000); 
}); 

Promise.allSettled([promise1, promise2 , promise3])

.then((values)=>{
    console.log(values); // 
})
.catch((error)=>{
    console.log(error); 
}); 

// output :- 
// [
//   { status: 'fulfilled', value: 'first' },
//   { status: 'rejected', reason: 'failed' },
//   { status: 'fulfilled', value: 'third' }
// ]

// promise.race():- it will give the promise which takes the least time i.e. the promise which gets executed first will be output on the screen 

var promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("first")
    },1000); 
}); 

var promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("failed"); 
    },5000); 
});
var promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("third");
    },2000); 
}); 

Promise.race([promise1, promise2 , promise3])

.then((values)=>{
    console.log(values); // first
})
.catch((error)=>{
    console.log(error); 
}); 

// async await :- used to handle the promises 
// in this we can not handle errors like promises , we will create a try catch block to find the errors

