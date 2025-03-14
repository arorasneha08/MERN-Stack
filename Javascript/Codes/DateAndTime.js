// date objects :- 

// Date() :- when called as a function, it returns a string representing current time.

// in js , the month starts from the 0 to 11 instead of 1 to 12 

const currentDate = new Date(); 
console.log(currentDate);  // 2024-08-14T13:13:29.768Z
console.log(typeof currentDate);  // object

// 2) Date(datastring) :- 
const dateString = "2024-08-14T13:13:29.768Z" ; 
console.log(dateString);
console.log(typeof dateString);// string 

// 3) new Date(year, month) :- 
const date1 =  new Date(2025 , 12);
console.log(date1);  // 2025-12-31T18:30:00.000Z
console.log(typeof date1);  // object

// 4) new Date(year , month , day) :- 
const date2 = new Date(2024 , 1, 19);
console.log(date2);  // 2024-02-18T18:30:00.000Z

// 5) new Date(year , month , day , hours) :- 
const date3 = new Date(2024 , 1 , 19 , 10);
console.log(date3); // 2024-02-19T04:30:00.000Z

// 6) new Date(year , month , date , hours , minutes , seconds) :- 
const date4 = new Date(2024 , 1 , 19 , 10 , 44 , 9);
console.log(date4); // 2024-02-19T05:14:09.000Z

// 7) new Date(year , month , day , hours , minutes , seconds , miliseconds) :- 
const date5 = new Date(2024 , 1 , 19 , 10 , 44 , 9 , 274);
console.log(date5); // 2024-02-19T05:14:09.000Z

// 8) new Date(year , month , day , hours , minutes , seconds , miliseconds) :- 
const date6 = new Date(2024 , 1 , 19 , 10 , 44 , 9 , 274);
console.log(date6); 

// 9) new Date(milliseconds) :- 
const currMiliseconds = new Date().getTime();
console.log(currMiliseconds);  // 1723643122303

// used to get date from milliseconds 
const dateFromMilliseconds = new Date(currMiliseconds); 
console.log(dateFromMilliseconds); // 2024-08-14T13:47:25.785Z

// accessing the dates :- 
const currDate = new Date(); 
console.log(currDate); 
const year = currDate.getFullYear();
console.log(year);// 2024
const month = currDate.getMonth();
console.log(month);// 7
const date = currDate.getDate();
console.log(date); // 14 
const day = currDate.getDay();
console.log(day);// 3 

// set the year or change the year :- 
let d1 = new Date(); 
console.log(d1);  // 2024-08-14T14:22:44.272Z
d1.setFullYear(2025);
console.log(d1);  // 2025-08-14T14:22:44.272Z

// access the time :
const currTime = new Date(); 
const hr = currTime.getHours();
console.log(hr);  // 19
const min = currTime.getMinutes(); 
console.log(min);  // 57
const sec = currTime.getSeconds();
console.log(sec); // 59
const time = currTime.getTime();
console.log(time);  // milliseconds 

// set the date and time :-
const d2 = new Date();
d2.setHours(10); 
console.log(d2);  // 2024-08-14T04:39:39.170Z

d2.setMinutes(30);
console.log(d2); // 2024-08-14T05:00:32.389Z

d2.setSeconds(45);
console.log(d2);

d2.setMilliseconds(234);
console.log(d2); 

// to get the time in the perfect form :- 
const d3 = new Date(); 
const localString = d3.toLocaleString(); 
console.log(localString); // 14/8/2024, 9:16:15 pm

// to only get the date :- 
const d4 = new Date(); 
const dateLocalString = d4.toLocaleDateString();
console.log(dateLocalString);  // 14/8/2024

// to only get the time :- 
const d5 = new Date(); 
const timeLocalString = d5.toLocaleTimeString(); 
console.log(timeLocalString);  // 9:28:58 pm

// parse() :- it will give the milliseecond value
const d6 = new Date(); 
const parseDate = Date.parse(d6); 
console.log(parseDate);  // 1723651288000

let newDate = new Date(); 
console.log(Date.now());  // 1723651639760
console.log(newDate.getTime()); // 1723651639760

// Questions :- 

// 1) write a function to add specific number of days to a given date  

const addDaysToAdd = (date, extraDay) => {
    let updatedDate = date.getDate() + extraDay; 
    date.setDate(updatedDate);
    console.log(date);
}

const d7 = new Date("2024-02-29"); 
addDaysToAdd(d7, 7); // 2024-03-07T00:00:00.000Z

// ques 2 :- difference in days between two dates 

const getDaysDifference = (dat1 , dat2)=> {
    let millisecondsInOneDay = 24 * 60 * 60 * 1000 ; 
    let diff = Math.abs(dat2 - dat1); 
    return Math.round(diff/millisecondsInOneDay); 
}

const dat1 = new Date("2024-02-19");
const dat2 = new Date("2024-03-01");
console.log(getDaysDifference(dat1 , dat2)); // 11 

