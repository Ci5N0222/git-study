// Narrowing
// 1. typeof
function func04_1(x) {
    if (typeof x === 'string') {
        return x + 1;
    }
    else {
        return x + 1;
    }
}
func04_1('123');
func04_1(123);
function func04_2(x) {
    let array = [];
    if (typeof x === 'number')
        array[0] = x;
    else { }
}
/**
 *  Assertion(타입 덮어쓰기)
 *  1. Narrowing 할 때 사용
 *  2. 무슨 타입이 들어올지 100% 확실할 때 사용
 *  3. 비상용, 디버깅용 외엔 사용 X
 */
function func04_3(x) {
    let array = [];
    array[0] = x;
}
function func04_4(animal) {
    if ('swim' in animal) {
        animal.swim;
    }
    else if ('fly' in animal) {
        animal.fly;
    }
}
// instanceof 연산자로 object narrowing 가능
let date = new Date();
if (date instanceof Date) {
}
function func04_5(x) {
    if (x.wheel === '4개')
        '';
    else if (x.wheel === '2개')
        '';
}
