
// 1-masala
// let UserNumber = +prompt("Son kiriting");
//
// const Numberrandom = (n) => {
//     let count = 0;
// for(let i = 0; i <= n; i++) {
//     count += i;
// }
//     console.log(`${n} ni raqamlar yig'indisi: ${count}`)
// }
// Numberrandom(UserNumber);








// 2-masala
// const find = (n) => {
//     let count = 0;
//     for (let number of n) {
//         count += number;
//     }
//     let c = count % 10;
//     let d = (count-c) / 10
//     console.log([d,c]);
// }
// find([1, 22, 3]);






// 3-masala
// let input  = +prompt("Son kiriting");
// const polidrom = (n) => {
//     let result = n.toString().split('').reverse().join('');
//     if(n == result){
//         console.log(`${result} polidrom`);
//     }else{
//         console.log(`${result} polidrom emas`);
//     }
// }
// polidrom(input)








// 4-masala
// let RandomSon = parseInt(Math.random() * 10);
// const RandomNumber = (n) => {
//     let counter = 0;
//     for(let i = 0; i <= n; i++){
//         counter += i
//     }
//     console.log(`Random sonni yig'indis ${counter}`);
// }
// console.log(`Random  ${RandomSon}`);
// RandomNumber(RandomSon)






// 5-masala
// let InputLetters = prompt("So'z kiriting");
// const Letter = (n) => {
//     let result  = n.split('').reverse().join('');
//     if(n == result){
//         console.log(`${result} polidrom so'z`);
//     }else{
//         console.log(`${result} polidrom so'z emas`);
//     }
// }
// Letter(InputLetters)







// 6-masala

// let obj = {a:1,b:22};
// console.log(Object.values(obj) .reduce((a, b) => a + b,0));