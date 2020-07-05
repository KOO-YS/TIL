var cluster = require('cluster');

// 스케쥴링 방식 : 라운드 로빈
cluster.schedulingPolicy = cluster.SCHED_RR;    // round robin


if(cluster.isMaster == true){   // false -> worker
    cluster.fork();     // worker 발생
    cluster.fork();     // worker 발생
    cluster.fork();     // worker 발생

    // event : online일때 함수 실행
    cluster.on('online', function(worker){
        for(var i = 0; i< 10; i++){
            console.log(worker.process.pid, " : 동작");
        }
    });
}
