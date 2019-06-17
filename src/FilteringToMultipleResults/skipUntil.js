"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# ignore values before the notifier sends the signal at 3s");
rxjs_1.timer(0, 1000)
    .pipe(operators_1.take(6), operators_1.skipUntil(rxjs_1.timer(3000))).subscribe(console.log);
