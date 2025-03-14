let display = document.getElementById("display");
function addsymbol(input){
    display.value = display.value + input;
}
function calculate(){
    try{

        let res = eval(display.value);
        display.value =  res;
    }
    catch{
        display.value = "Error!";
    }
}
function cleardisplay(){
    display.value = "";
}
function clearcharacter(){
    let cross = display.value;
    display.value= cross.slice(0,-1);
}