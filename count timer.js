const days=document.querySelector("#days")
const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")


function UpdateTime(){
    // console.log(new Date());  new date is an object used to find the current date
const currentYear=new Date().getFullYear();
// console.log(currentYear+1);

const newYear=new Date (`April29 ${currentYear} 00:00:00`);

// console.log(newYear);

const currentDate=new Date();
// console.log(currentDate);

const diff=newYear-currentDate;

// console.log(diff/1000/60/60/24);
// lets declare a variable and use math floor()

const d=Math.floor(diff/1000/60/60/24);
// console.log(d);
const h=Math.floor((diff/1000/60/60)%24);
// console.log(h);
const m=Math.floor((diff/1000/60)%60);
// console.log(m);
const s=Math.floor((diff/1000)%60);
// console.log(s);
// console.log(d+" "+h+" "+m+" "+s);

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;
}

UpdateTime();
setInterval(UpdateTime,1000);

/*
1000ms=1s
60s=1m
60m=1hr
24hr=1day
*/
