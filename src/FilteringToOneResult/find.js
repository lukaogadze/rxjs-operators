"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# first matching value: ");
rxjs_1.of(1, 2, 3, 4, 5, 6, 7, 8).pipe(operators_1.find(function (x) { return x > 2 && x % 2 === 0; })).subscribe(console.log, null, function () { return console.log("complete"); });
