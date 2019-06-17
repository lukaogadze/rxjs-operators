"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
rxjs_1.of().pipe(operators_1.throwIfEmpty()).subscribe(console.log, function (x) { return console.log(x.message); });
