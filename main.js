let sec=document.querySelector(".sec")
let min=document.querySelector(".minute")
let hour=document.querySelector(".hour")
function SecRotate(){
let date = new Date();
let a = date.getSeconds() *6;
let t = date.getMinutes()*6;
let p = date.getHours()*30;
sec.style.transform=`rotate(`+a+`deg)`
min.style.transform=`rotate(`+t+`deg)`
hour.style.transform=`rotate(`+p+`deg)`
}
setInterval(SecRotate,1000);














