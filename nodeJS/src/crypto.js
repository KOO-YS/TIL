var crypto = require('crypto');

// getCiphers : 지원하는 암호화 알고리즘 네임 반환
var ciphers = crypto.getCiphers();

// 넘 많아
// for(var x of ciphers){
//     console.log(x);
// }

// createCipher : 암호화용 객체 생성
var key = 'test key';
var data = '암호화할 데이터';

var cipher = crypto.createCipher('aes-128-cbc', key);
var result = cipher.update(data, "utf-8", "base64");
result += cipher.final("base64");

console.log("암호화 문자열 : ",result);

// createDecipher : 복호화용 객체 생성
var decipher = crypto.createDecipher('aes-128-cbc', key);
var result2 = decipher.update(result, "base64", "utf8");
result2 += decipher.final("utf8");

console.log("복호화된 문자열 : ", result2); 
// update : 데이터를 암호화/복호화

// final : 암호화된 데이터에 마지막 종료 블럭 추가