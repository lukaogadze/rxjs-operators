"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source$ = rxjs_1.interval(100);
var notifier$ = new rxjs_1.Observable(function (observer) {
    setTimeout(function () { return observer.next(); }, 150);
    setTimeout(function () { return observer.next(); }, 350);
    setTimeout(function () { return observer.complete(); }, 750);
});
console.log("# the source emit values every 100 ms");
console.log("# the notifier signals at 150 ms, 350 ms and 750 ms");
console.log("# at 150 ms, the latest value is 0");
console.log("# at 350 ms, the latest value is 0");
console.log("# at 750ms, the latest value is 6");
source$.pipe(operators_1.sample(notifier$), operators_1.take(3)).subscribe(console.log);
