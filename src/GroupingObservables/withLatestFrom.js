"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source$ = rxjs_1.timer(0, 300).pipe(operators_1.take(3), operators_1.map(function (x) { return "A" + x; }));
var internal1$ = rxjs_1.timer(0, 100).pipe(operators_1.take(10), operators_1.map(function (x) { return "B" + x; }));
var internal2$ = rxjs_1.of("C").pipe(operators_1.delay(10));
console.log("# at 0, source emit 0, source B emits 0");
console.log("# at 10 internal2 emits C");
console.log("# at 300 source emits 1 and internal1 emits 2");
console.log("# at 600, source emits 2 and internal emits 5 ");
console.log("# then source completes, ending the subscription");
console.log("");
source$.pipe(operators_1.withLatestFrom(internal1$, internal2$)).subscribe(function (x) {
    console.log(x);
});
