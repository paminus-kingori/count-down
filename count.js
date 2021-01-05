let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let hrs = document.querySelector(".hrs");
let days = document.querySelector(".days")


// const removeTime = (x)=>{
// return (parseInt(x)-1)
// }

// console.log(removeTime(sec.innerText))
let bday = [20,24,59,59];


const findDifference = ()=>{
let today = new Date();
let day = today.getDate();
let todHrs = today.getHours();
let todMin = today.getMinutes();   
let todSec = today.getSeconds();

    days.innerText =bday[0] - day 
    hrs.innerText = bday[1] - todHrs 
    min.innerText = bday[2] - todMin 
    sec.innerText = bday[3] - todSec
}

setInterval(findDifference,1000);
