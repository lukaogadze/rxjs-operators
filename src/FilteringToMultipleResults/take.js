"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// take
//  the first n values and complete
var source$ = rxjs_1.timer(0, 100);
console.log("# take the first 5 values");
source$.pipe(operators_1.take(5)).subscribe(console.log, null, function () { return console.log("complete"); });
