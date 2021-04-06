x = prompt();
y = prompt();
function sum(x, y, operation) {
    return (x + y);
}
function dif(x, y, operation) {
    return (x - y);
}
function mul(x, y, operation) {
    return (x * y);
}
function div(x, y, operation) {
    return (x / y);
}
switch (x, y) {
    case (x > 0, y > 0):
        z = sum;
        alert(z);
        console.log(sum);
        break;
}
switch (x, y) {
    case (x < 0, y < 0):
        console.log(dif);
        break;
}
switch (x, y) {
    case (x > 0, y < 0):
        console.log(mul);
        break;
}
switch (x, y) {
    case (x < 0, y > 0):
        console.log(div);
        break;
}