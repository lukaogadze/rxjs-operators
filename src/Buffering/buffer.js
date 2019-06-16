"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# emit the buffer 1000ms");
rxjs_1.interval(100)
    .pipe(operators_1.buffer(rxjs_1.interval(1000)), operators_1.take(3)).subscribe(console.log);
