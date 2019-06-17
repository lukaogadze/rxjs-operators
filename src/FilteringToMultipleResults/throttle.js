"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source$ = rxjs_1.interval(100);
source$.pipe(operators_1.take(10), operators_1.tap(function (x) { return console.log("emitted from source: " + x); }), operators_1.throttle(function (y) {
    console.log("used to calculate next observable: " + y);
    return rxjs_1.timer(500);
})).subscribe(function (x) { return console.log("received by subscribers: " + x); });
