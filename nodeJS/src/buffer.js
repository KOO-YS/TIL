
// alloc : 지정된 바이트 만큼 기억공간 생성. 0으로 초기화
var b1 = Buffer.alloc(10);  // 10 byte짜리 공간 생성
console.log(b1);            // <Buffer 00 00 00 00 00 00 00 00 00 00>

// allocUnsafe : alloc에서 초기화 x. alloc에 비해 속도 빠름
var b2 = Buffer.allocUnsafe(10); // memory 상태에 따라 랜덤값 배정
console.log(b2);            // <Buffer 00 70 72 6f 00 65 72 74 00 00>

// byteLength & length : 버퍼의 용량(byte)를 반환
var size1 = Buffer.byteLength(b1);
console.log("size1 : ", size1);
console.log("bytes : ", b1.length);

// from : 지정된 값을 관리하는 기억공간 생성
var b3 = Buffer.from('qwerty');         // english : 1Byte
var b4 = Buffer.from("안녕하세요");     // 한글 : 3Bytes
console.log(b3);
console.log(b4);

// compare : 기억공간 크기 비교 
//          왼 == 오 -> 0
//          왼 > 오 -> 1
//          왼 < 오 -> 0
var b5 = Buffer.from('cccc');
var b6 = Buffer.from('cccc');
var b7 = Buffer.from('aaaa');
var b8 = Buffer.from('dddd');

var v1 = Buffer.compare(b5, b6);
console.log("v1 : ", v1);

// concat : 배열안에 있는 모든 버퍼를 하나로 합쳐 새로운 버퍼 생성
var arr1 = [b5, b6, b7, b8];
var b9 = Buffer.concat(arr1);
console.log(b9);

// copy : 다른 버퍼에 복사
var b10 = Buffer.from('12345');
var b11 =Buffer.alloc(10);

b10.copy(b11, 0, 2);    // copyObj, startIndex, endIndex
console.log(b10);       // 문자에서 숫자로 변환도 됨

// entries : 버퍼의 내용을 [인덱스, 값] 형태로 만들어 배열 반환
var arr2 =b5.entries();
for(var str of arr2){
    console.log(str);
}

// equals : 두 버퍼의 내용이 같은지 비교
var b11 = Buffer.from('abcd');
var b12 = Buffer.from('abcd');
var b13 = Buffer.from('qwer');

var v4 = b11.equals(b12);
console.log("v4 : ",v4);

var v5 = b11.equals(b13);
console.log("v5 : ",v5);

// fill : 버퍼에 지정된 값이 있는지 확인
var b14 = Buffer.from('aa');
console.log(b14);
b14.fill('c');
console.log(b14);
b14.fill('ab');
console.log(b14);

// includes : 버퍼에 특정값이 있는지 확인
var b15 = Buffer.from('test node');
var v6 =b15.includes('node');
console.log("v6 : "+v6);

var v7 =b15.includes('js');
console.log("v7 : "+v7);

// indexOf : 버퍼에 지정된 값의 위치 반환 (값이 없으면 -1 반환)
var v8 = b15.indexOf('node');
console.log("v8 : "+v8);

var v9 = b15.indexOf('js');
console.log("v9 : "+v9);

// lastIndexOf : 버퍼에 지정된 값의 위치를 뒤에서부터 검사해 반환 (값X return -1)
var v10 = b15.lastIndexOf('d');
console.log("v10 : "+v10);

// isBuffer : 지정된 객체가 버퍼 객체인지 확인
var v11 = Buffer.isBuffer(b15);
console.log("v11 : "+v11);

var obj1 = {
    a1 : 10
};
var v12 = Buffer.isBuffer(obj1);
console.log("v12 : "+v12);

// keys : 버퍼에 저장된 객체의 인덱스 반환
var arr3 = b15.keys();
for(var i of arr3){
    console.log(i);
}

// toString : 버퍼에 저장된 값을 문자열로 반환
var v13 = b15.toString();
console.log("v13 : ",v13);