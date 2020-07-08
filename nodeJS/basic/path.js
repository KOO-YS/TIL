var path = require("path");

// basename :  경로에서 파일 이름만 가져옴
var b1 = path.basename("c:\\abc\\abc.txt"); // window
console.log("basename1 : ", b1);

var b2 = path.basename("c:/abc/abc.txt"); // unix/linux/mac
console.log("basename2 : ", b2);

var b3 = path.basename("abc.txt");
console.log("basename3 : ", b3);

// dirname : 파일 이름을 제외한 경로만 가져옴
var d1 = path.dirname("c:/abc/abc.txt"); 
console.log("dirname1 : ", d1);

var d2 = path.dirname("abc.txt");   // 경로가 없는 경우 . 만 출력
console.log("dirname2 : ", d2);

// extname : 파일의 확장자를 가져옴
var e1 = path.extname("c:/abc/abc.txt");
console.log("extname1 : ", e1);

// isAbsolute : 절대경로 여부를 파악
var abs1 = path.isAbsolute("c:/qwerty/qwert.txt");
var abs2 = path.isAbsolute("qwert.txt");
var abs3 = path.isAbsolute("c:\\asdf\\asdf.txt");   // window에서만 true 

console.log("isAbsolute1 : ", abs1);
console.log("isAbsolute2 : ", abs2);
console.log("isAbsolute3 : ", abs3);

// join : 주어진 문자열을 합쳐서 하나의 경로로 반환
var join = path.join("aaa","wwww","ssss","www.txt");
console.log("join : "+join);

// nomalize : 경로를 정리해서 보여줌
/*
 [ c:\\aaa\\..\\eee\\ccc.txt ] 
 경로 설명 
 c ━ aaa
   ┖ eee ━ ccc.txt
*/  
var n = path.normalize("c:\\aaa\\..\\eee\\ccc.txt");
console.log("nomalize : "+n)