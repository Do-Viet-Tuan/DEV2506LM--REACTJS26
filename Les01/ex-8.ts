let notSure: unknown = 10;
console.log("Not sure value: ", notSure);

notSure = "Hello";

if (typeof notSure === "string") {
    console.log(notSure.toUpperCase());
}