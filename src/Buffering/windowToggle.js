"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// windowToggle
// open a new buffers whenever received an opening signal
// after opened, the buffer stays until a closing signal is received
// then, send the buffer as a stream
console.log("# open a new buffer every 500 ms");
console.log("# close the buffer 200 ms after opening");
console.log("# hence, ignore those come between 200 ms and 500 ms");
var openings = rxjs_1.timer(0, 500);
var closing = function () { return rxjs_1.timer(200); };
rxjs_1.timer(0, 100).pipe(operators_1.take(36), operators_1.windowToggle(openings, closing), operators_1.switchMap(function (s) { return s.pipe(operators_1.toArray()); })).subscribe(console.log);
