// local storage is used to store the key value pairs in the browser

// used to see the contents in the local storage :
window.localStorage; 

// add new items in the lists :- 
localStorage.setItem("java" ,"javascript"); 

// to get the data from the local storage :- 
localStorage.getItem("jscourseTest"); // null because it does ot exist
localStorage.getItem("java"); 

// to remove item :-
localStorage.removeItem("javascript"); 

// local storage can only store strings , when you want to store a complex data structure like array or an object , you need to convert it into string using JSON.stringify ; 

JSON.stringify  //converts a JSON string into a js string 
JSON.parse  // converts JSON string to a js object 

