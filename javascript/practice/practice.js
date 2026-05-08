const { Temporal } = require('@js-temporal/polyfill');

// const price1=5;
// let price2 = 6;
// let total = price1 + price2;
// console.log(total);
// console.log(price2)

// function func1(){
//     let name = 'sanket';
//     name = 'sawant';
//      console.log(name);
// }

// func1();

// num=10;
// console.log(num);
//  typeof(num);

// let x=123456789012343453356n;
// x=x+4n;
// number=x
// console.log(typeof(x)); 
// console.log(number);

// x=true;
// console.log(typeof(x));

// const person = {firstName:"John", lastName:"Doe"};
// console.log(person.firstName);

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[2]);
// console.log(typeof(cars[1]));

// let date=Date('2023-01-03 12:09');
// console.log(date);
// console.log(typeof(date));

// let x= Symbol();
// console.log(typeof(x));

// let num1 =12;
// let num2 =14;

// console.log(num1/num2);

// let num = "1243527";
// console.log(...num[2]);

// console.log(5!=="5");
// let num=5;
// let num2=4;
// console.log(num+ +num2);
// console.log(num);
// console.log(num2);
// console.log("arbaj"<"Sanket");

// let date=4;
// switch (date) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     console.log("Thursday");

//   case 5:
//     console.log("Friday");

//   case  6:
//     console.log("Saturday");
// }
// console.log(Boolean(Boolean(null)==0));

// let x = false;
// let y = Boolean(false);
// console.log(typeof(y));
// i=2;
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// for (i; i < cars.length; i++) {
//   console.log(cars[i]);
//   break;
// }

// for (i ?? 3; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// function x(){
//     var z=4;
// }

// console.log(i);
// console.log(z);

// function sayHello() {
//   return "Hello World";
// }

// let message = sayHello();
// console.log(typeof(sayHello));

// function showHello() {
    
    
// }
// showHello();
// sayHello("sabket","dyytjj");

// function sayHello(a,g,h) {
//         console.log("Hello World " + a);
//     }

// console.log(typeof(null+"hello"));
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(typeof(cars));

// const x=new Date().toDateString();
// const y=new Date();
// y.setDate(y.getDate()+6);
// let z=y.toDateString();
// console.log("X : "+x  + "  Y: " + y);
// console.log(x<z);

// Date.prototype.myMonth = function() {
//     console.log('in function');
// 	switch(this.getMonth()){
//     	case 0:
//         	return 'Jan';
//         case 1:
//         	return 'Feb';
//         case 2:
//         	return 'Mar';
//         case 3:
//         	return 'Apr';
//          default:
//          	return 'Others';
//     }
// };

// const d = new Date();
// // console.log(d.myMonth());

// console.log(myfun(d.getMonth())); 

// function myfun(d) {
//     console.log('in function');
// 	switch(d){
//     	case 0:
//         	return 'Jan';
//         case 1:
//         	return 'Feb';
//         case 2:
//         	return 'Mar';
//         case 3:
//         	return 'Apr';
//          default:
//          	return 'Others';
//     }
// }

// const date = Temporal.PlainDate.from('2026-05-17');
// console.log(date.toString());

// const date = new Temporal.PlainDateTime(2026, 5, 1, 14, 30);
// console.log(date.dayOfYear);

// const zoned = Temporal.ZonedDateTime.from("2026-05-17T14:30:15+02:00[Europe/Oslo]");

// let text = zoned.toLocaleString("en-US", {
//   dateStyle: "full",
//   timeStyle: "short"
// });
// console.log(text);

// const names=['sanket','ajinkya','lakhan'];
// const output=names.map((word)=>capitalise(word))
// console.log(output);

// function capitalise(word){
//     return word[0].toUpperCase()+word.slice(1);
// }


const person=['sanket','lakhan','ajinkya','arbaj'];

for (const element of person){
    console.log(element);
}