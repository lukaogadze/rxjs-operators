"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// combineAll
// combine latest values from multiple observables
// once all sources have emmited
console.log("# one source completes without emitting values");
console.log("# the combined source complete without an values");
var source1$ = rxjs_1.of();
var source2$ = rxjs_1.of(1, 2, 3);
rxjs_1.of(source1$, source2$).pipe(operators_1.combineAll()).subscribe(function (x) { return console.log(x); }, null, function () { return console.log("complete"); });
console.log("\r\n_______________________\r\n");
console.log("# latest values from all sources");
var source3$ = rxjs_1.of(1, 2, 3);
var source4$ = rxjs_1.interval(2000).pipe(operators_1.take(3));
var source5$ = rxjs_1.of(4, 5, 6).pipe(operators_1.delay(5000));
var source6$ = rxjs_1.of('a', 'b', 'c');
rxjs_1.of(source3$, source4$, source5$, source6$).pipe(operators_1.combineAll()).subscribe(function (x) {
    console.log(x);
});
