window.onload = function(){
    function printDetail(name, age, job){
        print("My name is "+name+". I'm "+age+" years old, and I'm" + job + ".");
    }

    function printDetailDefault(name="John Doe", age=35, job="Programmer"){
        print("My name is "+name+". I'm "+age+" years old, and I'm" + job + ".");
    }

    console.log(printDetail()); /* -- My name is undefined. I'm undefined years old, and I'm undefined.  */
    console.log(printDetailDefault()); /* -- My name is John Doe. I'm 35 years old, and I'm Programmer.  */
}