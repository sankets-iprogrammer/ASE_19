setTimeout(func1,2000);
console.log('normal call 1');

let myvar=setInterval(func2,500);
// for(let i=0;i<=21000;i++){
//     console.log(i);
// }
console.log('normal call 2');

function func1(){
    console.log('call from func1-setTimeOut');
}
function func2(){
    console.log('call from func2-setInterval');
}

setTimeout(()=>{clearInterval(myvar)},3000);