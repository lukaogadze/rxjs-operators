"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# emit twice");
rxjs_1.of(1, 2, 3).pipe(operators_1.repeat(2)).subscribe(function (x) { return console.log(x); }, null, function () { return console.log("complete"); });
