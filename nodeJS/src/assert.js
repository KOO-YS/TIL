// File is a CommonJS module; it may be converted to an ES6 module.
var assert = require('assert');

// assert : 주어진 변수 -> 수식 값 == 0 or false인 경우 오류 발생 
var v1 = 10;
var v2 = 10;
var v3 = 20;
var v4 = '10';
assert(v1 < v3);
console.log("v1 is smaller than v3");

// ERROR 발생
// assert(v1 == v3);

assert(v1 == v2);
console.log("v1 == v2");

// ERROR 발생
// assert(v1 - v2);        // 값 == 0
// console.log("v1 - v2 != 0");

assert(v1 - v3);        // 값 == -10
console.log("v1 - v3 != 0");

// equal : 주어진 두 변수나 수식의 결과 값이 다를 경우 오류 발생 (값의 타입 무시)
// strictEqual : 주어진 두 변수나 수식의 결과 값이 다를 경우 오류 발생 (타입 확인) 

// negative : notEqual() , notStrictEqual()
assert.equal(v1, v2);
console.log("v1 == v2");

// ERROR 발생
// assert.equal(v1, v3);
// console.log("v1 != v3");

assert.equal(v1, v4);
console.log("타입이 달라도 equal");

// ERROR 발생
// assert.strictEqual(v1, v4);      // 타입이 다름


// ------------------------------------------------------------------------
// ------------------------------------------------------------------------


// 변수의 값 뿐만 아닌 객체 맴버에 대한 비교
// deepEqual : 두 객체의 맴버가 동일하지 않을 경우 오류 발생 (값 타입 무시)
// deepStrictEqual : 두 객체의 맴버가 동일하지 않을 경우 오류 발생 (값 타입 검사)

// negative : notDeepEqual() , notDeepStrictEqual()

var obj1 = {
    a1 : 10,
    a2 : 20
};

var obj2 = {
    a1 : 10,
    a2 : 20
};

var obj3 = {
    a1 : 10,
    a2 : 30
};

var obj4 = {
    a1 : 10,
    a2 : '20'
};

assert.deepEqual(obj1, obj2);
console.log("obj1 == obj2");

// ERROR : 맴버 값이 다름
// assert.deepEqual(obj1, obj3);
// console.log("obj1 == obj3");

// ERROR : 타입이 다름
// assert.deepStrictEqual(obj1, obj4);
// console.log("obj1 == obj4");

