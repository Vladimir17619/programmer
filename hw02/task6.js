function Sum(x, y) {
    return x + y;
}
function Dif(x, y) {
    return x - y;
}
function Mul(x, y) {
    return x * y;
}
function Div(x, y) {
    return x / y;
}
function mathOperation(x, y, operation) {
    return (operation);
}
let x = prompt("введите x");
let y = prompt("введите y");
let operation = prompt();
switch (operation) {
    case "Сложение":
        console.log(Sum);
        break;
    case "Вычитание":
        console.log(Difn);
        break;
    case "Умножение":
        console.log(Mul);
        break;
    case "Деление":
        console.log(Div);
        break;
}
