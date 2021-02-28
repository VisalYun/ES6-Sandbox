**const**
value that can't be changed, read-only.
```
const pi = 3.14;
```

**let**
variable in the local scope or lexical scope within a code block
```
for(let i=0; i<5; i++){
    cosole.log(i);
}
```
**let vs var**
```
var x = 5;

if(x < 10){
    let x = 10;
    console.log(x);
}
console.log(x)
```
output:
```
10
5
```
if:
```
var x = 5;

if(x < 10){
    var x = 10;
    console.log(x);
}
console.log(x)
```
output:
```
10
10
```

**default parameter**
parameter which the function can rely on if the parameter of the calling function is not fully specifices
```
function printNum(num = 10){
    console.log(num)
}

printNum()
```
output:
```
10
```

**spread operator**
used on the array to split the array element into individual element
```
var num = [3,4,5]
console.log(...num);
```
output:
```
3 4 5
```

**template string**
allow you to inject the expression or variable inside the string without breaking it.
```
function printDetail(name, age){
    console.log(`my name is ${name} and I'm ${age} years old.`)
}
printDetail("Visal", 21);
```
output:
```
my name is Visal and I'm 21 years old.
```

**object literal**
```
var name = "Visal";
var age = 21;

var person = {
    name, age,
    getCurrentJob(job){
        console.log(`I'm ${job}.`)
    }
}

person.getCurrentJob("student");
```

**arrow function**
```
var printName = name => {
    console.log(`Hello ${name}!`);
}
printName("Visal");
```