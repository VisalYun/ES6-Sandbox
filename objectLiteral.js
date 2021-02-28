window.onload = function(){
    var name = "Visal";
    var age = 21;

    var person = {
        name, age,
        getCurrentJob(job){
            console.log(`I'm ${job}.`)
        }
    }

    person.getCurrentJob("student");
}