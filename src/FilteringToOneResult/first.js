"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# just the first...");
rxjs_1.of(0, 1, 2, 3, 4)
    .pipe(operators_1.first())
    .subscribe(console.log, null, function () { return console.log("complete"); });
console.log("\r\n__________________\r\n");
rxjs_1.of(1, 3, 5, 7, 9, 10).pipe(operators_1.first(function (x) { return x % 2 === 0; })).subscribe(console.log, null, function () { return console.log("complete"); });
console.log("\r\n__________________\r\n");
rxjs_1.of(1, 3, 5, 7, 9).pipe(operators_1.first(function (x) { return x % 2 === 0; })).subscribe(console.log, function (err) { return console.log("error: " + err.message); }, function () { return console.log("complete"); });
