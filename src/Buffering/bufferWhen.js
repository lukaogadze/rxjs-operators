"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# vary buffer clearing based on value from interval");
var x = 0;
rxjs_1.interval(500)
    .pipe(operators_1.take(10), operators_1.tap(function (i) { return (x = i); }), operators_1.bufferWhen(function () {
    // vary buffer closing
    if (x < 5) {
        return rxjs_1.interval(1000);
    }
    return rxjs_1.interval(500);
})).subscribe(console.log);
