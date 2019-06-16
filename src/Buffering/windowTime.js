"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source$ = rxjs_1.timer(0, 100).pipe(operators_1.take(9));
console.log("# emit buffer after 200 ms");
source$.pipe(operators_1.windowTime(200), operators_1.switchMap(function (x) { return x.pipe(operators_1.toArray()); })).subscribe(console.log);
