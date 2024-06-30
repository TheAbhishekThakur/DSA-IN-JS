const data = new Object();
const obj = {};

const user = {
    name: 'Abhishek',
    age: 28
};

// To access an object property
console.log(user.name);
console.log(user["age"]);

// To add a new object property
user.address = "Noida";

// To modify an object property
user.name = "Vikas";

// To delete an object property
delete user.address;;

// An object with function
const userDetails = {
    name: 'Sachin',
    sayName: function(){
        console.log(this.name)
    }
}

userDetails.sayName();