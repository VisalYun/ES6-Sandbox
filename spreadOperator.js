window.onload = function(){
    var num = [2, 3, 4];
    console.log(...num); /* -- 2 3 4, will be printed */

    var num2 = [...num, 5, 6, 7];
    console.log(num2); /* -- [2, 3, 4, 5, 6, 7] will be printed */

    function add3Numbers(a, b, c){
        console.log(a+b+c);
    }

    add3Numbers(...num); /* 9 will be printed */
}