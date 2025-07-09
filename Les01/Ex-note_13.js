// Kieu dữ liệu nang cao trong TypeScript
//union types - kết hợp nhiều kiểu dữ liệu
var value;
value = "Hello";
console.log("string: ", value);
value = 42;
console.log("number: ", value);
var userId = "abc123"; // có thể là string hoặc number
var userId2 = 12345; // có thể là string hoặc number
console.log("User ID: ", userId);
console.log("User ID 2: ", userId2);
var user1 = {
    name: "Tuan",
    age: 20,
    email: "phonenix.Tuan@icloud.com"
};
var user2 = {
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
