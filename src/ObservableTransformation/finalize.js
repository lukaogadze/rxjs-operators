"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
rxjs_1.of(1).pipe(operators_1.finalize(function () { return console.log("finalize"); }))
    .subscribe(function (val) { return console.log("value: " + val); }, function (err) { return console.log("error: " + err); }, function () { return console.log("complete"); });
console.log("\r\n__________________________\r\n");
rxjs_1.of('a', 1).pipe(operators_1.tap(function (z) { return z.toUpperCase(); }), operators_1.finalize(function () { return console.log("finalize"); })).subscribe(function (val) { return console.log("value: " + val); }, function (err) { return console.log("error: " + err); }, function () { return console.log("complete"); });
