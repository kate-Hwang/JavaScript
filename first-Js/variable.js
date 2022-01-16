'use strict';
//상식적인 모습으로 자바스크립트를 유연하게 이용할 수 있도록


//2. Variable(변수-변경될 수 있는 값)rw(read/write 값을 읽고 쓸수 있다.)
//let (added ES6)-Mutable
//Block Scope
let globalName = 'global name'; //global scope
{
let name = 'kate';
console.log(name);

name = 'hellokate';
console.log(name);
console.log(globalName);//글로벌변수
}
console.log(name);//block Scope
console.log(globalName);//글로벌변수

//var-nope
//var hoisting(어디에 선언했나에 상관없이 항상 제일 위로 선언을 
//끌어올려주는 것을 말한다.)
//var는 블록스코프가 없다. 블록스코프를 철저히 무시한다.

//3.Constant (Immutable)(only read 값을 읽기만 가능하다)
// 왠만하면 값을 할당한 다음에 다시는 변경되지 않는 데이터 타입을 사용해라
// 자바스크립트에서 값이 변경될 일이 없다면 왠만하면 const로 값을 지정하는게 좋다.
// - 보안성 (security)
// - 다양한 Thread의 변경가능성 (thread Safety)
// - 개발자들의 실수를 방지할 수 있음 (reduce human mistakes)
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types: premitive types, frozen object(데이터 자체를 변경하는 것은 불가능 하다.)
//Mutable data types: all objects by dafault are mutable in JS(array는 자바스크립트에서 Mutable데이터타입이다.)

//4. Variable Types
//primitive, single item: number, string, boolean, null, undefined, symbol
//object, box container
//function, first-class function

const count = 17;
const size = 17.1;
console.log(`value: ${count} , type: ${typeof count}`);
console.log(`value: ${size} ,  type: ${typeof size}`);

//Number - speicla numeric values

//bigInt
const bigInt = 123456789012345678901234567890n; //over(-2**53) ~2*53)
console.log(`value: ${bigInt}, type:${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;//일반 스트링 + 변수 = 
console.log(`value: ${greeting}, type:${typeof greeting}`);
const helloyap = `hi ${brendan}!`; //template literals(String)
console.log(`value:${helloyap}, type:${typeof helloyap}`);

//boolean
//false:0, null, undefined, NaN, ''
//true: 그 외의 값
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type:${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


//null
let nothing = null; //너는 비어있는 값이라고 지정하는거다.
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x; //선언은 되었지만 아무것도 값이 지정되어있지 않다.(정해지지않은경우)
console.log(`value: ${x}, type: ${typeof x}`);

//symbol
//map이나 다른자료에서 고유한 식별자가 필요할때, 우선순위를 주고싶을때
const symbol1 = Symbol('id');//주어진 
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

//object
const kate = { name:'kate', age: 30 }; //const이기때문에 변환불가
kate.age = 30;
console.log(`value: ${kate}, type: ${typeof kate}`);

//5. 동적 타입핑(Dynamic typing)
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text ='7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text ='8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);