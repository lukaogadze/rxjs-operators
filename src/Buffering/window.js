"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# emit the  buffer after 1000 ms");
rxjs_1.interval(100)
    .pipe(operators_1.window(rxjs_1.interval(1000)), operators_1.take(3), operators_1.switchMap(function (w) { return w.pipe(operators_1.toArray()); })).subscribe(console.log);
