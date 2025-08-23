<<<<<<< HEAD
// Kieu dữ liệu nang cao trong TypeScript

//union types - kết hợp nhiều kiểu dữ liệu
let value: string | number;
value = "Hello";
console.log("string: ", value);
value = 42;
console.log("number: ", value);

// type alias - định nghĩa kiểu
type UserID = string | number;
let userId: UserID = "abc123"; // có thể là string hoặc number
let userId2: UserID = 12345; // có thể là string hoặc number
console.log("User ID: ", userId);
console.log("User ID 2: ", userId2);

//interface - định nghĩa cấu trúc đối tượng
interface Person {
    name: string;
    age: number;
    email?: string;//tùy chọn
}
const user1: Person = {
    name: "Tuan",
    age: 20,
    email: "phonenix.Tuan@icloud.com"
};
const user2: Person = {
    name: "An",
    age: 22
    // email không được cung cấp, vì nó là tùy chọn
};
console.log("User Name: ", user1.name);
console.log("User Age: ", user1.age);
console.log("User Email: ", user1.email);
console.log("User Name 2: ", user2.name);
console.log("User Age 2: ", user2.age);
console.log("User Email 2: ", user2.email);
console.log("user1", user1);
console.log("user2", user2);

=======
// Kieu dữ liệu nang cao trong TypeScript

//union types - kết hợp nhiều kiểu dữ liệu
let value: string | number;
value = "Hello";
console.log("string: ", value);
value = 42;
console.log("number: ", value);

// type alias - định nghĩa kiểu
type UserID = string | number;
let userId: UserID = "abc123"; // có thể là string hoặc number
let userId2: UserID = 12345; // có thể là string hoặc number
console.log("User ID: ", userId);
console.log("User ID 2: ", userId2);

//interface - định nghĩa cấu trúc đối tượng
interface Person {
    name: string;
    age: number;
    email?: string;//tùy chọn
}
const user1: Person = {
    name: "Tuan",
    age: 20,
    email: "phonenix.Tuan@icloud.com"
};
const user2: Person = {
    name: "An",
    age: 22
    // email không được cung cấp, vì nó là tùy chọn
};
console.log("User Name: ", user1.name);
console.log("User Age: ", user1.age);
console.log("User Email: ", user1.email);
console.log("User Name 2: ", user2.name);
console.log("User Age 2: ", user2.age);
console.log("User Email 2: ", user2.email);
console.log("user1", user1);
console.log("user2", user2);

>>>>>>> 20149b5d56bd2002aa14f31c2c8d2788cbcf4d53
