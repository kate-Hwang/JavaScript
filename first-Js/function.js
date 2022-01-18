'use strict';

//function은 인풋과 아웃풋을 잘 받아낸다.
//Application prgramming Interface(API)
//
//function 은 프로그램을 이루는 하나의 큰 block이다.
//재사용이 가능하다

//function 사용법
 //function name(param1, param2) { body.. return; }
 //함수안에 함수이름(파라미터1,파라미터2) {..기본로직작성..}
 //하나의 함수는 한가지의 일만 하도록 만들어야 한다는 점
 //naming : doSomething, command, verb ->무언가를 동작하는 것이기에 동사형태로 이름을 짓는게 좋다.
 //e.g. createCardAndPoint -> createCard, createdPoint
 //function is object in JS 자바스크립에서 함수는 object이다.

 function printHello(){
     console.log('hello');
 }
 printHello();

 //paramiter로 전달
 function log(message){
     console.log(message);
 }
 log('hello@');
 //자바스크립트에서는 타입이 없다. ->string 과 Number을 전달하는지 모른다.
 //typeScript에서 정확한 타입을 알수 있기때문에 대형프로젝트에서는 타입스크립트활용도가 좋다.

 //2.parmeters
 //premitive parameters: passed by value
 //object parameters: passed by reference
 function changeName(obj){
     obj.name = 'coder';
 }
 const kate = { name: 'kate' };
 changeName(kate);
 console.log(kate);

 //3.Default parameters (added in ES6)
    function showMessage(message, from = 'shitt'){ //from이 정의되지 않기에 undefined rkqtdl skdhsek.
        console.log(`${message} by ${from}`);
    }
    showMessage('fuckyou!');

//4. Rest parameters -> 배열형태로 전달된다.
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){ //for ~ of 문구
        console.log(arg);
    }

    //상세한 배열설명참고
    args.forEach((arg) => console.log(arg));

}
printAll('dream','coding','kate');

//5.Local Scope(지역변수)
//밖에서는 안이 보이지 않고 안에서는 밖을 볼 수 있다.

    let globalMessage = 'global'; //global 변수

    function printMessage() {
        let message ='yapping';
        console.log(message); //local 변수
        console.log(globalMessage);

            function printAnother(){
                console.log(message);
                let childMessage ='im baby_yapp!';
            }
            console.log(message);
    }

    printMessage();

//6. Return a value

    function sum(a,b) {
        return a + b;
    }
    const result = sum(1,2); //값은 3
    console.log(`sum: ${sum(1,2)}`);

//7. Early return, early exit
//실무에서 안좋은 로직방향
    function upgradeUser(user){
        if(user.point > 10){
            //long upgrade logic...
        }
    }
//실무에서 좋은 로직방향
//빨리 리턴을 하고 실행하도록 하는것이 좋다.
    function upgrade(user){
        if(user.point > 10){
            return;
        }
        //long upgrade logic.....
    }

//8.function Expression
//함수는 변수에 할당이 되고 함수의 파라미터에 변환이 된다.
//function Expression은 호이스팅(hoisting)이 된다.
//함수가 선언되기 이전에 호출가능하다.
    const print = function(){ // 익명함수, 이름을 선언할 수 있음
        console.log('print');
    };
    print();
    const printAgain = print;
    printAgain();
    const sumAgain = sum;
    console.log(sumAgain(1,3));

//9.Callback 함수
//

function randomQuiz(answer, printYes, printNo){
    //if - else구문
    if(answer ==='love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function (){ //익명함수
    console.log('yes!');
};

//지정함수를 쓰는 이유는 디버깅을 할때 함수이름이 나오게 하기위해서, 함수안에서
//또 다른 스스로의 함수를 호출할때 - 잘 하지말것(필요할때만 할것.)
const printNo = function print(){ //지정함수(named function)
    console.log('Nope!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you',printYes, printNo);

//Arrow Function (익명함수로 항상 씀)
    const simplePrint = function(){
        console.log('simplePrint');
    };

    //간결하게 쓸수있고 깔끔하게 표현가능하다.
    const simplePrint = () => console.log('simplePrint'); //arrow function
    const add = (a,b) => a + b;
    const simplePrint = (a,b) => {
        //do something more
        return a * b;
    };

//IIFE : 함수를 바로 불러와서 실행 할 수 있는 방법
    (function hello(){
        console.log('IIFE');
    })();