function a(){
    for(var i = 1; i <= 5; i++){
        setTimeout(() => {
            console.log('problem in loop : ' + i);
        }, 1000);
    }
}
a();

function a1(){
    for(let i = 1; i <= 5; i++){
        setTimeout(() => {
            console.log('problem in loop solution using let:' + i);
        }, 1000);
    }
}
a1();

function a2(){
    for(var i = 1; i <= 5; i++){
        function p(x){
            setTimeout(() => {
                console.log('solution of loop without let :' + x);
            }, 1000);
        }
        p(i);
    }
}
a2();