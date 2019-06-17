"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source1$ = rxjs_1.of("A", "B", "C").pipe(operators_1.delay(100));
var source2$ = rxjs_1.of("D");
rxjs_1.of(source1$, source2$)
    .pipe(operators_1.exhaust()).subscribe(console.log);
