"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// takeUntil
//      take values until the notifier sends signal
console.log("# take the values until the notifier sends the signal at 300ms");
rxjs_1.timer(0, 100).pipe(operators_1.takeUntil(rxjs_1.timer(300))).subscribe(console.log, null, function () { return console.log("complete"); });
