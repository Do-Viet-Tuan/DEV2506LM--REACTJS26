//6.. Cú pháp Speed trong TypeScript
// Speed là một cú pháp trong TypeScript cho phép bạn định nghĩa các hàm với các tham số có thể là bất kỳ kiểu dữ liệu nào.
// Nó cho phép bạn viết các hàm có thể làm việc với nhiều kiểu dữ liệu khác
// mà không cần phải định nghĩa kiểu dữ liệu cụ thể.
// Cú pháp cơ bản
// const newArray = [...oldArray];
// const newObject = {...oldObject};
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
