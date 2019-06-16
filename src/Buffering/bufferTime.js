"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# create a new buffer every 1 seconds");
console.log("# and emit it after 2 seconds");
rxjs_1.interval(1000)
    .pipe(operators_1.take(6), operators_1.bufferTime(2000, 1000)).subscribe(console.log);
