window.onload = function(){
    var x = 5;

    if(x < 10){
        let x = 10;
        /* var x = 10; --  (1)*/
        console.log(x); /* 10 will be printed */
    }

    console.log(x); /* 5 will be printed. 10 will be printed if (1) */

    /* Other Example */
    var items = document.getElementsByTagName('li');
    for(var i=0; i< items.length(); i++){
        items[i].onclick = function(){
            console.log("with var: " + i)
        }
    } /* -- every time you click, 4 will be printed since i value is 4 and i is act as global variable */

    for(let i=0; i< items.length(); i++){
        items[i].onclick = function(){
            console.log("with let: " + i)
        }
    } /* -- every time you click, the i value correspond to the time it assigned */
}