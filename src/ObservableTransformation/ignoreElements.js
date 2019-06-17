"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
rxjs_1.of(1, 2).pipe(operators_1.ignoreElements()).subscribe(function (x) { return console.log(x); }, function (e) { return console.log(e); }, function () { return console.log("complete"); });
