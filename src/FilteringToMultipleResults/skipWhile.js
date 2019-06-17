"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// skipWhile
// skip the value while the condition held true
// once the condition becomes false, emit the coming values as
// noremal
console.log("# skip while the condition is true");
rxjs_1.of(1, 2, 3, 1, 2, 3, 4)
    .pipe(operators_1.skipWhile(function (x) { return x < 3; })).subscribe(console.log);
