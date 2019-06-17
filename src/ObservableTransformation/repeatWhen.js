"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# repeat the sequence twice (for 3 total)");
rxjs_1.of(1, 2).pipe(operators_1.startWith("source starting"), operators_1.repeatWhen(function () {
    return rxjs_1.interval(1000).pipe(operators_1.tap(function () { return console.log("internal emitted"); }), operators_1.take(2));
})).subscribe(console.log, null, function () { return console.log("complete"); });
