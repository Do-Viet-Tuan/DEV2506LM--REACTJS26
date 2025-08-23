"use strict";
//6.. Cú pháp Speed trong TypeScript
// Speed là một cú pháp trong TypeScript cho phép bạn định nghĩa các hàm với các tham số có thể là bất kỳ kiểu dữ liệu nào.
// Nó cho phép bạn viết các hàm có thể làm việc với nhiều kiểu dữ liệu khác
// mà không cần phải định nghĩa kiểu dữ liệu cụ thể.
// Cú pháp cơ bản
// const newArray = [...oldArray];
// const newObject = {...oldObject};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = void 0;
exports.add = add;
// Sao chép mảng
var nums = [1, 2, 3];
var newNums = __spreadArray([], nums, true); // Sao chép mảng nums
console.log(newNums);
console.log('--------------------------------------');
// nối mảng
var a = [1, 2, 3];
var b = [4, 5, 6];
var combined = __spreadArray(__spreadArray([], a, true), b, true); // Nối hai mảng a và b
console.log(combined);
console.log('--------------------------------------');
//truyền phần tử làm đổi số hàm
function sum(x, y, z) {
    return x + y + z;
}
var numb = [1, 2, 3]; // Khai báo mảng numb với kiểu tuple gồm 3 số
//Ép kiểu mảng thành tuple
console.log(sum.apply(void 0, numb)); // Truyền các phần tử của mảng numb làm đối số cho hàm sum
console.log('--------------------------------------');
//Dùng đối tượng
//sao chép đối tượng
var Person = { name: "Tuan", age: 20 };
var newPerson = __assign({}, Person); // Sao chép đối tượng Person
console.log(newPerson);
console.log('--------------------------------------');
// gộp đối tượng
var a1 = { x: 1 };
var b1 = { y: 2, z: 3 };
var merged = __assign(__assign({}, a1), b1); // Gộp hai đối tượng a và b
console.log(merged);
console.log('--------------------------------------');
//ghi đè thuộc tính
var obj1 = { a: 1, b: 2 };
var updated = __assign(__assign({}, obj1), { b: 3, c: 4 }); // Ghi đè thuộc tính b và thêm thuộc tính c
console.log(updated);
console.log('--------------------------------------/n');
console.log('--------------------------------------');
// Cú pháp Destructuring trong TypeScript
// Array Destructuring (Phân rã mảng)
var Array1 = [10, 20, 30];
var a2 = Array1[0], b2 = Array1[1], c2 = Array1[2]; // Phân rã mảng thành các biến a, b, c
console.log(a2); // 10
console.log(b2); // 20
console.log(c2); // 30
console.log('--------------------------------------');
// bỏ qua phần tử
var _a = [1, 2, 3], x = _a[0], z = _a[2]; // Bỏ qua phần tử thứ hai
console.log(z);
console.log('--------------------------------------');
// Sử dụng rest operator
var _b = [1, 2, 3, 4, 5], first = _b[0], rest = _b.slice(1); // Lấy phần tử đầu tiên và phần còn lại
console.log(rest); // [2, 3, 4, 5]
console.log('--------------------------------------');
//2. Object Destructuring (Phân rã đối tượng)
var person = { name3: "Tuan", age3: 20, city3: "Hanoi" };
var name3 = person.name3, age3 = person.age3; // Phân rã đối tượng thành các biến
console.log(name3); // "Tuan"
console.log(age3); // 20
console.log('--------------------------------------');
// Doi ten bien
var fullname = person.name3; // Đổi tên biến từ name thành fullname
console.log(fullname); // "Tuan"
console.log('--------------------------------------');
// Gia tri mac dinh
var _c = {}.city, city = _c === void 0 ? "Ha Noi" : _c;
console.log(city); // "Ha Noi" (giá trị mặc định nếu không có thuộc tính city trong đối tượng)
console.log('--------------------------------------');
//3. Destructuring trong hàm
// Tham so mang
function show(_a) {
    var x = _a[0], y = _a[1];
    console.log(x, y);
}
show([10, 20]); // Gọi hàm với mảng [10, 20]
console.log('--------------------------------------');
// Tham so doi tuong
function greet(_a) {
    var name = _a.name, age = _a.age;
    console.log("Hello, ".concat(name, ", ").concat(age, " years old."));
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
var Personn1 = /** @class */ (function () {
    function Personn1(name, age) {
        this.name = name;
        this.age = age;
    }
    Personn1.prototype.greet = function () {
        console.log("Xin chao, toi la ".concat(this.name));
    };
    return Personn1;
}());
var p1 = new Personn1("Tuan", 20); // Tạo một đối tượng từ class Person
p1.greet(); // Gọi phương thức greet của đối tượng p1
console.log('--------------------------------------');
// 2. Access Modifiers - public, private, protected
var Student = /** @class */ (function () {
    function Student(name, score, id) {
        this.name = name;
        this.score = score;
        this.id = id;
    }
    Student.prototype.showScore = function () {
        console.log("Diem: ".concat(this.score));
    };
    return Student;
}());
var student = new Student("Tuan", 90, 1);
student.showScore(); // "Diem: 90"
console.log(student.name); // "Tuan"
// console.log(student.score); // Lỗi: score là private
// console.log(student.id); // Lỗi: id là protected
console.log('--------------------------------------');
// 3. Kế thừa (Inheritance)
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a noise."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " barks."));
    };
    return Dog;
}(Animal));
var dog = new Dog("kiki");
dog.speak(); // "kiki makes a noise."
dog.bark(); // "kiki barks."
console.log('--------------------------------------');
//4. getters và setters ****
var Circle = /** @class */ (function () {
    function Circle(radiuss) {
        this._radiuss = radiuss;
    }
    Object.defineProperty(Circle.prototype, "radiuss", {
        get: function () {
            return this._radiuss;
        },
        set: function (value) {
            if (value > 0) {
                this._radiuss = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "area", {
        get: function () {
            return Math.PI * Math.pow(this._radiuss, 2);
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
//5. tu khoa static
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.double = function (x) {
        return x * 2;
    };
    MathUtils.PI = 3.14;
    return MathUtils;
}());
console.log(MathUtils.PI); // 3.14
console.log(MathUtils.double(5)); // 10
console.log('--------------------------------------');
// static giup truy cap ma khong can khoi tao doi tuong
//6. abstract class ( lop truu tuong)
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.describe = function () {
        console.log("Day la mot hinh hoc.");
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height; // Triển khai phương thức area
    };
    return Rectangle;
}(Shape));
// khong the tao instance tu abstract class. cac lop con buoc phai trien khai cac phuong thuc abstract (Trừu tượng))
console.log('--------------------------------------');
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.move = function () {
        console.log("".concat(this.name, " is moving."));
    };
    return Car;
}());
console.log('--------------------------------------');
// Bai Tap
//1. Tao class product co id, name, price, getInfo()
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getInfo = function () {
        return "Product ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this.price);
    };
    return Product;
}());
var product1 = new Product(1, "Laptop", 999.99);
console.log(product1.getInfo()); // "Product ID: 1, Name: Laptop, Price: $999.99"
console.log('--------------------------------------');
//2. tao class Employee ke thua person, them thuoc tinh salary.
var Person11 = /** @class */ (function () {
    function Person11(name, age) {
        this.name = name;
        this.age = age;
    }
    Person11.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Person11;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.getSalaryInfo = function () {
        return "".concat(this.name, " earns $").concat(this.salary, " per year.");
    };
    return Employee;
}(Person11));
var employee1 = new Employee("Tuan", 22, 500);
console.log(employee1.greet()); // "Hello, my name is Tuan and I am 22 years old."
console.log(employee1.getSalaryInfo()); // "Tuan earns $500 per year."
console.log('--------------------------------------');
var Cat1 = /** @class */ (function () {
    function Cat1(name) {
        this.name = name;
    }
    Cat1.prototype.sound = function () {
        return "".concat(this.name, " says meow!");
    };
    return Cat1;
}());
var Dog1 = /** @class */ (function () {
    function Dog1(name) {
        this.name = name;
    }
    Dog1.prototype.sound = function () {
        return "".concat(this.name, " says woof!");
    };
    return Dog1;
}());
var cat1 = new Cat1("Mimi");
var dog1 = new Dog1("Buddy");
console.log(cat1.sound()); // "Mimi says meow!"
console.log(dog1.sound()); // "Buddy says woof!"
console.log('--------------------------------------');
//// 9. xu ly modules, import, export trong TypeScript
/// module là gì
// Một module trong typescript la mot file .ts hoac .tsx chua cac khai bao, dinh nghia, ham, lop, bien, etc.
// Module giúp tổ chức mã nguồn, tái sử dụng và quản lý phụ thuộc giữa các phần của ứng dụng.
// Moi file hoat động như một module độc lập, giup tach biet và quản lý mã nguồn dễ dàng hơn.
//1. export (xuất dữ liệu)
exports.PI = 3.14; // Xuất hằng số PI
function add(x, y) {
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
