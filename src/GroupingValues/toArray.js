"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
rxjs_1.interval(100)
    .pipe(operators_1.take(9), operators_1.toArray()).subscribe(console.log);
