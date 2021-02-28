window.onload = function(){
    var printName = name => {
        console.log(`Hello ${name}!`);
    }
    printName("Visal");

    var person = {
        name: "Visal",
        sayHelloArrow(time){
            window.setInterval(()=>{
                console.log(`${this.name} say: Hello!`);
                time--;
            }, 1000);
        },
        
        sayHello(time){
            window.setInterval(function(){
                console.log(`${this.name} say: Hello!`);
                time--;
            }, 1000);
        }
    }
    person.sayHello();
    person.sayHelloArrow();
}