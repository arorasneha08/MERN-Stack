var promise1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("first")
    },2000); 
}); 

var promise2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("second"); 
    },5000); 
});
var promise3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("third");
    },2000); 
}); 

Promise.all([promise1, promise2 , promise3]) // the order in which the promises are passed they are printed in the same way 

.then((values)=>{
    console.log(values); // [ 'first', 'second', 'third' ]
})
.catch((error)=>{
    console.log(error); 
}); 