// POST 메소드를 이용하기 위함
var bodyParser =require("body-parser");
const { render } = require("ejs");
var urlencodedParser = bodyParser.urlencoded({extended : false});
module.exports = function(app){
    // app.get("/", function(req, res){
        //     res.send("ROOT");   // 응답 결과 브라우저에 보내기
        // });
        // app.get("/test", function(req, res){
            //     res.send("test");
            // });

    // app.get("/", function(req, res){
    //     res.render("index.html");
    // });
    // app.get("/test", function(req, res){
    //     res.render("test.html");
    // });
    app.get("/ejs", function(req, res){
        var date = new Date();
        var render_data = {
            str : "문자열",
            number : 100,
            date : date
        };

        res.render("dynamic.ejs", render_data);
    });
    // parameter 1. GET
    app.get("/param", function(req, res){
        var render_data = {
            data1 : req.query.data1,
            data2 : req.query.data2
        };
        res.render("parameter.ejs", render_data);
    });
    // parameter 1. POST
    app.post("/paramP", urlencodedParser, function(req, res){
        var render_data = {
            data1 : req.body.data1,
            data2 : req.body.data2
        };
        res.render("parameter.ejs", render_data);
    });

    app.get("/save_cookie", function(req, res){
        var op = {
            maxAge : 365 * 24 * 60 * 60     // 1년
        };
        res.cookie("cookie1","aaaaa", op);
        res.render("save_cookie.ejs");
    });
    app.get("/load_cookie", function(req, res){
        var render_data = {
            cookie1 : req.cookies.cookie1
        };
        res.render("load_cookie.ejs", render_data);
    });
    app.get("/save_session", function(req, res){
        req.session.data1 = 100;
        req.session.data2 = "test STring";

        res.render("save_session.ejs");

    });
    app.get("/load_session", function(req, res){
        var render_data = {
            data1 : req.session.data1,
            data2 : req.session.data2
        };
        res.render("load_session.ejs", render_data);
    });
};