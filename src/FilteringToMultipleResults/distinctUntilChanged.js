"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# emit only values if changed from previous one");
rxjs_1.of(1, 1, 1, 2, 1, 2, 3)
    .pipe(operators_1.distinctUntilChanged()).subscribe(console.log);
console.log("\n# emit only values if mapper function retrun value that changes from previous one");
rxjs_1.of(1, -1, 2, -2, 1, 2).pipe(operators_1.distinctUntilChanged(function (x, y) { return Math.abs(x) === Math.abs(y); }))
    .subscribe(console.log);
