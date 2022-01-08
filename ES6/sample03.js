
//var는 반복문 안에서 변수가 공유되는 문제가 있었는데, let은 이를 개선가능하다. 
//또한 이러한 문제는 비동기함수를 호출시 문제가 될 수 있다 

function forScope(){

    for(var i=0; i<10; i++){
        setTimeout(function(){ //반복문이 진행되면서 setTimeout 함수를 호출
            console.log(i) //결과값은 모두 9
        }, 100);
    }

}
