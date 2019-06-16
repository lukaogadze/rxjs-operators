"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// define open/close signals
var opening = rxjs_1.interval(400).pipe(operators_1.tap(function () { return console.log("open"); }));
var closing = function () { return rxjs_1.interval(300).pipe(operators_1.tap(function () { return console.log("close"); })); };
// each buffer closes 300 ms after opening
rxjs_1.interval(100)
    .pipe(operators_1.tap(console.log), operators_1.bufferToggle(opening, closing), operators_1.take(3)).subscribe(console.log);
