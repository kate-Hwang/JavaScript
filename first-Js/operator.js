'use strict';

//1.String concatenation
//문자열의 합
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("kate's \n\tbook"); //백슬러쉬 n은 줄바꿈, t는 탭키
//console.log안의 특수 문자열 검색 및 정리

//2.Numeric operators( 숫자연산 )
console.log(1 + 1); //덧셈
console.log(1 - 1); //빨셈
console.log(1 / 1); //나누기
console.log(1 * 1); //곱하기
console.log(5 % 2); //나누기고 나머지값
console.log(2 ** 3); //2에 3승

//3.Increment and Decrement operators
let counter = 2;
const preIncrement = ++counter; //++는 증가수, 증가한 수를 나중에 할당한다.
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; //먼저 할당한 후에 증가시킨다.
//postIncrement = counter;
//counter = counter +1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter; //--는 감소수, 감소한 수를 나중에 할당한다.
//counter = counter - 1;
//preDecrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--; //먼저 할당한 후에 김소시킨다.
//postDecrement = counter;
//counter = counter -1;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

//4.Assigment operators
let x = 3;
let y = 6;
x += y; //x = x + y;
x -= y; //x = x + y;
x *= y; //x = x * y;
x /= y; //x = x / y;

//5.비교하는 연산자
console.log(10 < 6); // 작거나
console.log(10 <= 6); // 작거나 같거나
console.log(10 > 6); // 크거나
console.log(10 >= 6); // 크거나 같거나

//6.Logical operators : || (or), && (and), ! (not)
//함수를 제일 마지막에 호출하는것이 좋다.
const value1 = false;
const value2 = 4 < 2;
// || (or)
//or 연산자는 하나라도 true가 나오면 연산을 끝낸다.
console.log(`or: ${value1 || value2 || check()}`);

// && (and)
//and 연산자는 하나라도 false가 나오면 연산을 끝낸다.
//null 체크할때도 많이쓰임
console.log(`or: ${value1 && value2 && check()}`);

// if(nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for(let i = 0; i < 10; i++) {
        //wasting time
        console.log('nope');
    }
    return true;
}

// ! (not연산자)- 값을 반대로 바꿔준다
console.log(!value1);

//7.Equality(같다)
    const stringFive = '5';
    const numberFive = 5;
    // ==loose equality, with type conversion
    console.log(stringFive == numberFive);
    console.log(stringFive != numberFive);

    // ===Strict equality, no type conversion (타입이 다르니까 다르니까 다르게 같다라고 판단함)
    console.log(stringFive === numberFive);
    console.log(stringFive !== numberFive);

    //object equality by reference
    const kate01 = {name: 'kate'};
    const kate02 = {name: 'kate'};
    const kate03 = kate01;
    console.log(kate01 == kate02);
    console.log(kate01 === kate02);
    console.log(kate01 === kate03);

    //equality - puzzler
    console.log(0 == false); //true
    console.log(0 === false); //불린타입노노이기때문에 false
    console.log('' == false); //true
    console.log('' === false); //false
    console.log(null == undefined); //true
    console.log(null === undefined); //false
    
//8. Conditional operators : if구문
//if, else if, else

    const name = 'kate';
    if(name === 'Kate') {
        console.log('Welcom,kate!');
    }else if (name ==='coder') {
        console.log('you can do it');
    }else {
        console.log('Fuck');
    }
    
//9. Ternary operator : ? 구문
//condition ? valuel : value2;
    console.log(name === 'kate' ? 'yes' : 'no');
    //'kate'의 값이 true이면 yes실행 아니면 no실행
    //값을 할당하거나 출력할때 많이 쓴다.

//10.switch operators
// 스위치의 값이 맞으면 출력 아니면 무시
    const browser = 'IE';
    switch (browser) {
        case 'IE':
            console.log('Fucking go away!');
            break;
        case 'Chrome':
        case 'Firefox':
            console.log('yappp love you!');
            break;
        default:
            console.log('fucking same all!');
            break;    
    }

//11. While 구문 Loops
//while loop, while the condition is truthy,
//body code is executed.

    let i = 3;
    while (i > 0) {
        console.log(`while: ${i}`);
        i--;
    }
    //do-while loop
    //먼저 블록을 실행한 후에 조건이 맞는지 확인하고 검사한다.
    //만약 블록을 먼저 실행하고 싶다면 do-while을 쓰고 조건문이 맞을때만
    //실행하고 싶다면 while을 써야한다.

    do {
        console.log(`do while: ${i}`);
        i--;
    } while (i > 0);

//12.for구문(for loop)
//for(begin; condition, step)
// condition과 step만 무한으로 돌아간다.

    for(i=3; i>0, i--;) {
        console.log(`for: ${i}`);
    }

    //블록안에 지역변수를 선언하고 작성할 수 도 있다.
    for(let i = 3; i > 0; i = i - 2) {
        console.log(`inline variable for: ${i}`);
    }

    //Nested loops (cpu에 좋지가 않다.)
    for(let i = 0; i< 10; i++) {
        for(let j = 0; j < 10; j++) {
            console.log(`i:${i}, j:${j}`);
        }
    }

//break(완전끝내는것) , continue(지금것만 스킵하고 다음스텝으로 넘어가는 것)
//반복구문을 끝내는 키워드
//Q1.숫자를 0-10까지 짝수인 아이들만 프린트하는것을 continue를 이용해서 해볼것

for (let i =0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`q1. ${i}`);
        continue;
    }
}
//또다른 짝수인 숫자만 뽑아내는 방법
for(let num = 1; num <= 10; num++) {
    if(num % 2 === 0)
    console.log(`good. ${num}`);
}

//Q2.주어진 숫자의 범위 0-10까지를 루핑하는 것을 작성하되 대신에 숫자 8을 만나면
// 그만하는 것을 break를 이용해서 해볼것

for (let i =0; i<11; i++) {
    if(i >8){
        break;
    }
    console.log(`q2.${i}`);
}

//레이블 코딩방법 찾아보고 정리하기 (현업에서는 많이 안씀!)

