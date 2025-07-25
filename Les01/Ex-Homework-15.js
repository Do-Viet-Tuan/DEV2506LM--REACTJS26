//7. Khai báo kiểu cho hàm (function type)
var divide;
divide = function (a, b) {
    return a / b;
};
console.log(divide(10, 2));
console.log('--------------------------------------');
var subtract = function (x, y) { return x - y; };
console.log(subtract(10, 5));
var multiply = function (x, y) { return x * y; };
console.log(multiply(10, 5));
console.log('--------------------------------------');
//9. Hàm generic - kiểu dữ liệu động
function identity(arg) {
    return arg;
}
var output1 = identity("Hello, Everyone!");
var output2 = identity(42);
console.log(output1);
console.log(output2);
console.log('--------------------------------------');
// Exercise 
//1 Viết hàm tính chu vi diện tích hình chữ nhật
function tinhchuvi_hinhchunhat(length, width) {
    return 2 * (length + width);
}
function tinhdientich_hinhchunhat(length, width) {
    return length * width;
}
console.log("Chu vi hình chữ nhật:", tinhchuvi_hinhchunhat(5, 10));
console.log("Diện tích hình chữ nhật:", tinhdientich_hinhchunhat(5, 10));
console.log('--------------------------------------');
//2. Viết hàm nhận một mảng số và trả về giá trị lớn nhất
function timSoLonNhat(num) {
    if (num.length === 0)
        return null;
    return num.reduce(function (max, curr) { return (curr > max ? curr : max); }, num[0]);
    //     reduce duyệt qua từng phần tử trong mảng, so sánh phần tử hiện tại (curr) với giá trị lớn nhất tạm thời (max).
    // Nếu curr > max, cập nhật max.
    // Giá trị khởi đầu là num[0], tức là phần tử đầu tiên trong mảng.
}
console.log("Giá trị lớn nhất trong mảng:", timSoLonNhat([1, 2, 3, 4, 5]));
console.log("Giá trị lớn nhất trong mảng:", timSoLonNhat([-1, -2, -3, -4, -5]));
console.log("Giá trị lớn nhất trong mảng:", timSoLonNhat([]));
console.log('--------------------------------------');
//3. Viết hàm greet với tham số name và title?. Trả về chuỗi Chào mừng
//VD 5
function greet(name, title) {
    return "Ch\u00E0o m\u1EEBng ".concat(title ? title + " " : "").concat(name);
    // Hàm greet nhận hai tham số: name (bắt buộc) và title (tùy chọn).
    // Nếu title được cung cấp, nó sẽ được thêm vào chuỗi chào mừng, nếu không thì chỉ có tên.
}
console.log(greet("Tuan"));
console.log(greet("Tuan", "Mr."));
console.log('--------------------------------------');
//4. Viết generic function để đảo ngược mảng bất kỳ reverseArray<T>(arr: T[]): T[]
function reverseArray(arr) {
    return arr.slice().reverse(); // Sử dụng slice() để tạo bản sao của mảng và sau đó đảo ngược nó
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["a", "b", "c", "d"]));
console.log(reverseArray([true, false, true]));
console.log('--------------------------------------');
