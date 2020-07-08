var os = require("os");

console.log("CPU architecture : ",os.arch());

console.log("cpu info : ");

console.log(os.cpus());

console.log("총 메모리 양 : "+os.totalmem());

console.log("여유 메모리 양 : "+os.freemem());

console.log("호스트 네임 : "+os.hostname());

// 컴퓨터에 장착된 통신 장비들의 정보 반환
console.log("network interface : \n"+os.networkInterfaces());

console.log("실행 플랫폼 : ",os.platform());

console.log("버전 : "+os.release());

console.log("임시 폴더 : "+os.tmpdir());

console.log("실행 OS 이름 : ", os.type());

console.log("os 동작 시간 : "+os.uptime()," 초");

console.log("사용자 정보 : \n",os.userInfo());