"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// windowWhen
// buffer values
// on receiving signal from the notifier
// send the buffer as observable
// when the source complete
// send the last buffer as an observable
var source$ = rxjs_1.timer(0, 100).pipe(operators_1.take(9));
var notifier = function () { return rxjs_1.timer(200); };
console.log("# emit buffer after 200 ms");
source$.pipe(operators_1.windowWhen(notifier), operators_1.tap(function () { return console.log("new buffer"); }), operators_1.mergeAll()).subscribe(console.log);
