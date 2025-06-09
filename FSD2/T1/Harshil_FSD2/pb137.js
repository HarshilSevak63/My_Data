// WAS to create a class person having name, age & function elder.
// Create 2 obj of this class use one to call the method and pass 2 as parameter.
// Print details of elder person on console.

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    elder(p){
        if(this.age>p.age){
            console.log(this.name+" with age "+this.age+" is elder.");
        }
        else{
            console.log(p.name+" with age "+p.age+" is elder.");
        }
    }
}

p1=new person('XYZ',20);
p2=new person('ABC',21);
p1.elder(p2);
