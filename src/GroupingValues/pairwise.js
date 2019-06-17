"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var vals = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("# pairs of values");
rxjs_1.of.apply(void 0, vals).pipe(operators_1.pairwise()).subscribe(console.log, null, function () { return console.log("complete"); });
console.log();
console.log("# find first number decrease");
var nums = [10, 12, 10, 16, 20];
rxjs_1.of.apply(void 0, nums).pipe(operators_1.pairwise(), operators_1.filter(function (_a) {
    var p1 = _a[0], p2 = _a[1];
    return p1 - p2 < 0;
}), operators_1.first()).subscribe(function (_a) {
    var p1 = _a[0], p2 = _a[1];
    return console.log("decrease found: " + p1 + " to " + p2);
});
