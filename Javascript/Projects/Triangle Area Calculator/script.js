let sidea = document.getElementById("sidea");
let sideb = document.getElementById("sideb");
let sidec = document.getElementById("sidec");

function calculateArea(){
    let a = parseFloat(sidea.value); 
    let b = parseFloat(sideb.value);
    let c = parseFloat(sidec.value); 
    let s = (a+b+c)/2;
    let area = Math.sqrt(s* (s-a) * (s-b)); 
    let areaResult = area.toFixed(2); 
    document.getElementById("result").innerText =`${areaResult}`; 
}