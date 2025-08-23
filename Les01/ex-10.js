var student = ["Tuan", 20];
console.log("Student Name: ", student[0]);
console.log("Student Age: ", student[1]);
var person = { name: "Tuan", age: 20 };
console.log("Person Name: ", person.name);
console.log("Person Age: ", person.age);
//function greet(person: {name: string, age: number}): string {
function greet(name, age) {
    return "Hello, ".concat(name, ". You are ").concat(age, " years old.");
}
console.log(greet("Tuann", 20));
console.log(greet("tuannn", 20));
var fun_greet = function (name, age) {
    return "Hello, ".concat(name, ". You are ").concat(age, " years old.");
};
console.log(fun_greet("Tuannn", 20));
