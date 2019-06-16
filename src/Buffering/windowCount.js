"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// const source$ = timer(0,100).pipe(take(9));
// console.log("# buffer 2 times");
// source$.pipe(
//     windowCount(2),
//     switchMap(x => x.pipe(toArray()))
// ).subscribe(console.log);
var source$ = rxjs_1.timer(0, 100).pipe(operators_1.take(9));
console.log("# buffer 2 times");
source$.pipe(operators_1.windowCount(2, 3), operators_1.switchMap(function (x) { return x.pipe(operators_1.toArray()); })).subscribe(console.log);
