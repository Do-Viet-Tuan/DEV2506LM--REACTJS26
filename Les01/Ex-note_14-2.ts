    // 5. ham su dung co tham so tuy chon va mac dinh
    function greet(name: string, title?: string): string {
        return `hello ${title ?? ""} ${name}`;// ham truyen title truoc khi truyen tham so, neu khong truyen thi mac dinh la undefined
        // truyen name truoc ==>  return `hello ${name} ${title ?? ""}`;
    }
    function multiply(a: number, b: number = 1): number {
        return a * b;
    }
    console.log(greet("Tuan")); // Output: hello Tuan
    console.log(greet("Tuan")); // Output: hello Tuan
    console.log(greet("Tuan", "Mr.")); // Output: hello Mr. Tuan
    console.log(multiply(5)); // Output: 5
    console.log(multiply(5, 2)); // Output: 10
// 6 . hàm sử dụng toán tử rest
function total(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(total(1, 2, 3));
console.log(total(1, 2, 3, 4, 5)); 