"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.get("/", function (req, res) {
    res.send({ message: "ok", user: { age: 12 } });
    res.end();
});

app.get("/user", function (req, res) {
    res.send({ user: { name: "a", age: 12 } });
    res.end();
});

app.get("/user/:id", function (req, res) {
    res.send({ user: { id: req.params.id, name: "a", age: 12 } });
    res.end();
});

var port = process.env.PORT || 5000;
var server = app.listen(port, function () {
    console.log("App running on " + port);
});