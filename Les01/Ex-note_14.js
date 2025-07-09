//ham va kieu tra ve, tham so
//1. ham co khai bao tham so va kieu tra ve
function greet(name) {
    return "Hello, ".concat(name);
}
var message = greet("Tuan");
console.log(message);
// 2. ham kieu void(ham khong tra ve gi, khong dinh kieu tra ve)
function logMessage(message) {
    console.log("Log: ", message);
}
logMessage("This is a log message");
//3. ham kieu never (ham khong bao gio tra ve, vi no se bao loi)
function throwError(message) {
    throw new Error(message);
}
// 4. ham nặc danh (ham khong co ten)/ arrow function
var sum = function (a, b) {
    return a + b;
};
var result = sum(5, 10);
console.log("Sum: ", result);
