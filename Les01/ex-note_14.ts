<<<<<<< HEAD
//ham va kieu tra ve, tham so
    //1. ham co khai bao tham so va kieu tra ve
    function greet(name:string): string {
        return `Hello, ${name}`;
    }
    const message = greet("Tuan");
    console.log(message);
    // 2. ham kieu void(ham khong tra ve gi, khong dinh kieu tra ve)
    function logMessage(message: string): void {
        console.log("Log: ", message);
    }
    logMessage("This is a log message");

    //3. ham kieu never (ham khong bao gio tra ve, vi no se bao loi)
    function throwError(message: string): never {
        throw new Error(message);
    }

    // 4. ham nặc danh (ham khong co ten)/ arrow function
    const sum = (a: number, b: number): number => {
        return a + b;
    };
    const result = sum(5, 10);
    console.log("Sum: ", result);

=======
//ham va kieu tra ve, tham so
    //1. ham co khai bao tham so va kieu tra ve
    function greet(name:string): string {
        return `Hello, ${name}`;
    }
    const message = greet("Tuan");
    console.log(message);
    // 2. ham kieu void(ham khong tra ve gi, khong dinh kieu tra ve)
    function logMessage(message: string): void {
        console.log("Log: ", message);
    }
    logMessage("This is a log message");

    //3. ham kieu never (ham khong bao gio tra ve, vi no se bao loi)
    function throwError(message: string): never {
        throw new Error(message);
    }

    // 4. ham nặc danh (ham khong co ten)/ arrow function
    const sum = (a: number, b: number): number => {
        return a + b;
    };
    const result = sum(5, 10);
    console.log("Sum: ", result);

>>>>>>> 20149b5d56bd2002aa14f31c2c8d2788cbcf4d53
