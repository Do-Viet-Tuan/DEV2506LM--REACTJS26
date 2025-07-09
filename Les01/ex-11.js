var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log("Selected Color: ", c); // Output: Selected Color: 1
console.log("Color Name: ", Color[c]); // Output: Color Name: Green
