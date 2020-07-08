var dns = require("dns");

// 원격 데이터를 받아오는 과정이라 대기 시간이 오래 걸릴 수 있다.
dns.lookup("google.com", function(err, address, family){
    console.log("ip address : ",address);
    console.log("ip version : ", family);
});

var op1 = {
    family : 4
};
dns.lookup("google.com", op1, function(err, address, family){
    console.log("ip address v4 : ", address);
});

var op2 = {
    family : 6
};
dns.lookup("google.com", op1, function(err, address, family){
    console.log("ip address v6 : ", address);
});