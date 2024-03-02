"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = require("express");
var cors_1 = require("cors");
var fs_1 = require("fs");
var https_1 = require("https");
var app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send("Hello World");
});
var PORT = process.env.PORT || 5432;
app.listen(PORT, function () { return console.log("Rodando"); });
https_1.default
    .createServer({
    cert: fs_1.default.readFileSync("SSL/code.crt"),
    key: fs_1.default.readFileSync("SSL/code.key"),
}, app)
    .listen(PORT, function () { return console.log("API HTTPS RODANDO"); });
