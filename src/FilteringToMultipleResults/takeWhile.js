"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# take while condition is true");
rxjs_1.of(1, 2, 3, 1).pipe(operators_1.takeWhile(function (val) { return val < 3; })).subscribe(console.log);
