//6.. Cú pháp Speed trong TypeScript
// Speed là một cú pháp trong TypeScript cho phép bạn định nghĩa các hàm với các tham số có thể là bất kỳ kiểu dữ liệu nào.
// Nó cho phép bạn viết các hàm có thể làm việc với nhiều kiểu dữ liệu khác
// mà không cần phải định nghĩa kiểu dữ liệu cụ thể.
// Cú pháp cơ bản
// const newArray = [...oldArray];
// const newObject = {...oldObject};


// Sao chép mảng
const nums = [1, 2, 3];
const newNums = [...nums]; // Sao chép mảng nums
console.log(newNums);
console.log('--------------------------------------');
// nối mảng
const a = [1, 2, 3];
const b = [4, 5, 6];
const combined = [...a, ...b]; // Nối hai mảng a và b
console.log(combined);
console.log('--------------------------------------');

//truyền phần tử làm đổi số hàm
function sum(x: number, y: number, z: number): number {
    return x + y + z;
}
const numb: [number, number, number] = [1, 2, 3]; // Khai báo mảng numb với kiểu tuple gồm 3 số
//Ép kiểu mảng thành tuple
console.log(sum(...numb)); // Truyền các phần tử của mảng numb làm đối số cho hàm sum

console.log('--------------------------------------');

//Dùng đối tượng
//sao chép đối tượng
const Person = { name: "Tuan", age: 20 };
const newPerson = { ...Person }; // Sao chép đối tượng Person
console.log(newPerson);
console.log('--------------------------------------');
// gộp đối tượng
const a1 = { x: 1 };
const b1 = { y: 2, z: 3 };
const merged = { ...a1, ...b1 }; // Gộp hai đối tượng a và b
console.log(merged);
console.log('--------------------------------------');
//ghi đè thuộc tính
const obj1 = { a: 1, b: 2 };
const updated = { ...obj1, b: 3, c: 4 }; // Ghi đè thuộc tính b và thêm thuộc tính c
console.log(updated);
console.log('--------------------------------------/n');
console.log('--------------------------------------');
// Cú pháp Destructuring trong TypeScript

// Array Destructuring (Phân rã mảng)
const Array1 = [10, 20, 30];
const [a2, b2, c2] = Array1; // Phân rã mảng thành các biến a, b, c
console.log(a2); // 10
console.log(b2); // 20
console.log(c2); // 30
console.log('--------------------------------------');

// bỏ qua phần tử
const [x, , z] = [1, 2, 3]; // Bỏ qua phần tử thứ hai
console.log(z);
console.log('--------------------------------------');

// Sử dụng rest operator
const [first, ...rest] = [1, 2, 3, 4, 5]; // Lấy phần tử đầu tiên và phần còn lại
console.log(rest); // [2, 3, 4, 5]
console.log('--------------------------------------');

//2. Object Destructuring (Phân rã đối tượng)
const person = { name3: "Tuan", age3: 20, city3: "Hanoi" };
const { name3, age3 } = person; // Phân rã đối tượng thành các biến
console.log(name3); // "Tuan"
console.log(age3); // 20
console.log('--------------------------------------');

// Doi ten bien
const { name3: fullname } = person; // Đổi tên biến từ name thành fullname
console.log(fullname); // "Tuan"
console.log('--------------------------------------');

// Gia tri mac dinh
const { city = "Ha Noi" } = {};
console.log(city); // "Ha Noi" (giá trị mặc định nếu không có thuộc tính city trong đối tượng)
console.log('--------------------------------------');

//3. Destructuring trong hàm
// Tham so mang
function show([x, y]: [number, number]) {
    console.log(x, y);
}
show([10, 20]); // Gọi hàm với mảng [10, 20]
console.log('--------------------------------------');

// Tham so doi tuong
function greet({ name, age }: { name: string, age: number }) {
    console.log(`Hello, ${name}, ${age} years old.`);
}
greet({ name: "Tuan", age: 20 });
console.log('--------------------------------------');

////8. Lop (class) va oop trong: TypeScript

/// Tong quan:
// class - lop doi tuong
// constructor - ham khoi tao
// Access modifiers - pham vi truy cap: public, private, protected
// Ke thua - extends
// interface / abstract class - 
// Tính da hinh - polymorphism
// Static, getter, setter

// 1. Khai báo class cơ bản
class Personn1 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet(): void {
        console.log(`Xin chao, toi la ${this.name}`);
    }
}

const p1 = new Personn1("Tuan", 20); // Tạo một đối tượng từ class Person
p1.greet(); // Gọi phương thức greet của đối tượng p1
console.log('--------------------------------------');

// 2. Access Modifiers - public, private, protected
class Student {
    public name: string;
    private score: number; // Chỉ có thể truy cập trong class này
    protected id: number; // Có thể truy cập trong class này và các lớp con

    constructor(name: string, score: number, id: number) {
        this.name = name;
        this.score = score;
        this.id = id;
    }

    showScore(): void {
        console.log(`Diem: ${this.score}`);
    }
}
const student = new Student("Tuan", 90, 1);
student.showScore(); // "Diem: 90"
console.log(student.name); // "Tuan"
// console.log(student.score); // Lỗi: score là private
// console.log(student.id); // Lỗi: id là protected
console.log('--------------------------------------');

// 3. Kế thừa (Inheritance)
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks.`);
    }
}
const dog = new Dog("kiki");
dog.speak(); // "kiki makes a noise."
dog.bark(); // "kiki barks."
console.log('--------------------------------------');

//4. getters và setters ****
class Circle {
    private _radiuss: number;

    constructor(radiuss: number) {
        this._radiuss = radiuss;
    }
    get radiuss(): number {
        return this._radiuss;
    }

    set radiuss(value: number) {
        if (value > 0) {
            this._radiuss = value;
        }
    }

    get area(): number {
        return Math.PI * this._radiuss ** 2;
    }
}

//5. tu khoa static
class MathUtils {
    static PI: number = 3.14;

    static double(x: number): number {
        return x * 2;
    }
}
console.log(MathUtils.PI); // 3.14
console.log(MathUtils.double(5)); // 10
console.log('--------------------------------------');
// static giup truy cap ma khong can khoi tao doi tuong

//6. abstract class ( lop truu tuong)
abstract class Shape {
    abstract area(): number; // Phương thức trừu tượng, không có thân hàm
    describe(): void {
        console.log("Day la mot hinh hoc.");
    }
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super();
    }

    get area(): number {
        return this.width * this.height; // Triển khai phương thức area
    }
}
// khong the tao instance tu abstract class. cac lop con buoc phai trien khai cac phuong thuc abstract (Trừu tượng))
console.log('--------------------------------------');

//7. interface trong oop
interface IAnimal {
    name: string;
    speak(): void; // Phương thức không có thân hàm
}
class Car implements Vehicle {
    constructor(public name: string) {}
    move(): void {
        console.log(`${this.name} is moving.`);
    }
}
console.log('--------------------------------------');

// Bai Tap
//1. Tao class product co id, name, price, getInfo()
class Product {
    constructor(public id: number, public name: string, public price: number) {}

    getInfo(): string {
        return `Product ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}
const product1 = new Product(1, "Laptop", 999.99);
console.log(product1.getInfo()); // "Product ID: 1, Name: Laptop, Price: $999.99"
console.log('--------------------------------------');

//2. tao class Employee ke thua person, them thuoc tinh salary.
class Person11 {
    constructor(public name: string, public age: number) {}

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
class Employee extends Person11 {
    constructor(name: string, age: number, public salary: number) {
        super(name, age);
    }

    getSalaryInfo(): string {
        return `${this.name} earns $${this.salary} per year.`;
    }
}
const employee1 = new Employee("Tuan", 22, 500);
console.log(employee1.greet()); // "Hello, my name is Tuan and I am 22 years old."
console.log(employee1.getSalaryInfo()); // "Tuan earns $500 per year."
console.log('--------------------------------------');
// 3. Tao abstract class shape va cac lop con Circle va Rectangle

//4. tao interface Animal va cac lop cat implements tu do
interface Animal {
    name: string;
    sound(): string; // Phương thức không có thân hàm
}
class Cat1 implements Animal {
    constructor(public name: string) {}

    sound(): string {
        return `${this.name} says meow!`;
    }
}
class Dog1 implements Animal {
    constructor(public name: string) {}

    sound(): string {
        return `${this.name} says woof!`;
    }
}
const cat1 = new Cat1("Mimi");
const dog1 = new Dog1("Buddy");
console.log(cat1.sound()); // "Mimi says meow!"
console.log(dog1.sound()); // "Buddy says woof!"
console.log('--------------------------------------');

//// 9. xu ly modules, import, export trong TypeScript
/// module là gì
// Một module trong typescript la mot file .ts hoac .tsx chua cac khai bao, dinh nghia, ham, lop, bien, etc.
// Module giúp tổ chức mã nguồn, tái sử dụng và quản lý phụ thuộc giữa các phần của ứng dụng.
// Moi file hoat động như một module độc lập, giup tach biet và quản lý mã nguồn dễ dàng hơn.

//1. export (xuất dữ liệu)
export const PI = 3.14; // Xuất hằng số PI

export function add(x: number, y: number): number { // Xuất hàm add
    return x + y;
}
console.log('--------------------------------------');
//2. export default (xuất mặc định)
// export default function greet(name: string): string { // Xuất hàm greet mặc định
//     return `Hello, ${name}!`;
//}
console.log('--------------------------------------');

//3. import (nhập dữ liệu từ module khác)
//3.1 Theo ten
// import { PI, add } from './Ex-Homework-16'; // Nhập hằng số PI và hàm add từ module Ex-Homework-16.ts
// console.log(PI); // 3.14
// console.log(add(2, 3)); // 5
// console.log('--------------------------------------');

// //3.2 Nhập mặc định
// import greet from './Ex-Homework-16'; // Nhập hàm greet mặc định từ module Ex-Homework-16.ts
// console.log(greet("Tuan")); // "Hello, Tuan!"
// console.log('--------------------------------------');

// //3.3 doi ten khi import
// import { add as addition } from './Ex-Homework-16'; // Nhập hàm add và đổi tên thành addition
// console.log(addition(5, 10)); // 15
// console.log('--------------------------------------');

//4. to chuc thu muc theo module
// Giả sử bạn có cấu trúc thư mục như sau:
// src/
// ├── utils/
// │   ├── math.ts
// │   └── string.ts
// └── models/
//     ├── person.ts
// └── apps.ts

// bạn co thể import từ utils và models, components để chia rẽ module theo chức năng


//5. export interface/type/class
//models/person.ts
// export interface Person {
//     name: string;
//     age: number;
// }
// export class student {
//     constructor(public name: string, public age: number) {}
// }

// //app.ts
// import { Person, student } from './models/person'; // Nhập interface Person và class students từ module person.ts
// const student1: student = new student("Tuan", 20);
// console.log(student1.name); // "Tuan"
// console.log(student1.age); // 20
// console.log('--------------------------------------');

//6. tuy chon cau hinh module trong tsconfig.json
// {
//   "compilerOptions": {
//     "module": "ESNext",            // Sử dụng hệ thống module ES6 hoặc CommonJS
//     "target": "ES6",               // Biên dịch sang cú pháp ES6
//     "moduleResolution": "node",   // Cách TypeScript xử lý các module giống như Node.js
//     "baseUrl": "./src",           // Thư mục gốc để tính đường dẫn tương đối
//     "paths": {
//       "@utils/*": ["utils/*"]     // Alias để import nhanh từ thư mục utils
//     }
//   }
// }

// ngan gon
// import{ add } from "@utils/math"; // Sử dụng alias để import hàm add từ utils/math.ts