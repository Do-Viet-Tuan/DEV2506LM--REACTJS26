<<<<<<< HEAD
let student: [string, number] = ["Tuan", 20];
console.log("Student Name: ", student[0]);
console.log("Student Age: ", student[1]);

let person:{name: string, age: number} = {name: "Tuan", age: 20};
console.log("Person Name: ", person.name);
console.log("Person Age: ", person.age);


//function greet(person: {name: string, age: number}): string {
function greet(name: string, age: number){
    return `Hello, ${name}. You are ${age} years old.`;
}
console.log(greet("Tuann", 20));


console.log(greet("tuannn", 20));
const fun_greet = (name: string, age: number)=>{
    return `Hello, ${name}. You are ${age} years old.`;
}
console.log(fun_greet("Tuannn", 20));

=======
let student: [string, number] = ["Tuan", 20];
console.log("Student Name: ", student[0]);
console.log("Student Age: ", student[1]);

let person:{name: string, age: number} = {name: "Tuan", age: 20};
console.log("Person Name: ", person.name);
console.log("Person Age: ", person.age);


//function greet(person: {name: string, age: number}): string {
function greet(name: string, age: number){
    return `Hello, ${name}. You are ${age} years old.`;
}
console.log(greet("Tuann", 20));


console.log(greet("tuannn", 20));
const fun_greet = (name: string, age: number)=>{
    return `Hello, ${name}. You are ${age} years old.`;
}
console.log(fun_greet("Tuannn", 20));

>>>>>>> 20149b5d56bd2002aa14f31c2c8d2788cbcf4d53
