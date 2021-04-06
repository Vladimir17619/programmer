function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(parseFloat(value));
}
var myVar = '0';
console.log(isNumeric(myVar));//true
var myVar = 'null';
console.log(isNumeric(myVar));//false
// 0 это число, а null не имеет значения, они не равны
