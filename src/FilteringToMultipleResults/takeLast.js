"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source$ = rxjs_1.of(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log("# take the last 3 values");
source$.pipe(operators_1.takeLast(3)).subscribe(console.log, null, function () { return console.log("complete"); });
console.log("\r\n______________________\r\n");
console.log("# Only get 3 values, even though take specified 5");
rxjs_1.of(1, 2, 3)
    .pipe(operators_1.takeLast(5))
    .subscribe(console.log, null, function () { return console.log("complete"); });
var source3$ = rxjs_1.interval(100);
console.log("\r\n_______________________\r\n");
console.log("this will never emit anything, and never end, because interval doesn't have 'last' value");
source3$.pipe(operators_1.takeLast(5)).subscribe(console.log, null, function () { return console.log("complete"); });
