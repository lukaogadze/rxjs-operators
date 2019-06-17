"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# skip the last 2 values");
var source$ = rxjs_1.of(1, 2, 3)
    .pipe(operators_1.skipLast(2));
source$.subscribe(console.log);
setTimeout(function () {
    console.log("# Observable must complete");
    rxjs_1.interval(100)
        .pipe(operators_1.skipLast(1))
        .subscribe(console.log);
}, 3000);
