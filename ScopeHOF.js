// //==========================================Activity 1=============================
// // Write a "hello.." function, then have it run 5 times but only call once.

const func1 = () => {
    for (var i = 0; i < 5; i++){
        if(true){
            var string = "Hello Code Nation";
            console.log(i, string); 
        }
    }
    // console.log(i, string);         
}
func1();

// //==========================================Activity 2=============================
// //  Declare variable of 5 numbers & use .map to multiply array by 3.

const array = [5,10,15,20,25]

const total = array.map(num => num * 3);

console.log(total);      //output = [ 15, 30, 45, 60, 75 ]


// // ==================== ACTIVITY 2 alternative runthrough
// let mult = (a, b) => {
//     return a * b;
// }
// let arr = [5, 27, 1, 823, 52];

// let newArray = arr.map(x => x * 3);
// console.log(newArray);
