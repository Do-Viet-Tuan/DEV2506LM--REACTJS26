// 5. ham su dung co tham so tuy chon va mac dinh
function greet(name, title) {
    return "hello ".concat(title !== null && title !== void 0 ? title : "", " ").concat(name); // ham truyen title truoc khi truyen tham so, neu khong truyen thi mac dinh la undefined
    // truyen name truoc ==>  return `hello ${name} ${title ?? ""}`;
}
function multiply(a, b) {
    if (b === void 0) { b = 1; }
    return a * b;
}
console.log(greet("Tuan")); // Output: hello Tuan
console.log(greet("Tuan")); // Output: hello Tuan
console.log(greet("Tuan", "Mr.")); // Output: hello Mr. Tuan
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10
// 6 . hàm sử dụng toán tử rest
function total() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (sum, num) { return sum + num; }, 0);
}
console.log(total(1, 2, 3));
console.log(total(1, 2, 3, 4, 5));
