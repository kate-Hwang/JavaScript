
//var , let , const의 차이점

//함수가 아닌 블록에서의 var scope 설명
var a = 100; //변수 a를 선언

if (a > 0){ 
    var a = 200; // 블록안에서 같은 변수 a를 선언
    console.log(a); //여기서 a의 값은 200
}
console.log(a); //여기서 a의 값은 200

//함수가 아닌 블록에서의 let scope 설명
let a = 100; //변수 a 선언

if(a > 0){
    let a = 200; // 조건문에서 변수 a를 선언
    console.log(a); // 여기서 a의 값은 200
}
console.log(a); //여기서 a의 값은 100