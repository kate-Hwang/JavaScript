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

