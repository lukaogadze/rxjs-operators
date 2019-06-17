"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# min is: ");
rxjs_1.of(1, 2, -3, -1, -2, 3).pipe(operators_1.min()).subscribe(console.log);
console.log("\n\n# min is: ");
rxjs_1.of(1, 2, -3, -1, -2, 3).pipe(operators_1.min(function (a, b) { return (Math.abs(a) > Math.abs(b) ? 1 : -1); })).subscribe(console.log);
