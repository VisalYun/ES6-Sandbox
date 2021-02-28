window.onload(function(){
    const pi = 3.14;
    /*pi = 10;  --  wont work*/
    /*const pi = 10;  --  also wont work*/

    function calcArea(r){
        const pi = 10 /* --  work because this is local constant */
        console.log("The area of the circle is: " + (r * r * pi));
    }

    console.log(pi) /* -- 3.14 will be printing out because we use pi of global variable */
    calcArea(5);
});