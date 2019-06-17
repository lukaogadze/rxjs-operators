"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var fallBack$ = rxjs_1.of('a', "b", "c");
var source$ = new rxjs_1.Observable(function (observer) {
    observer.next("A");
    setTimeout(function () { return observer.next("B"); }, 100);
    setTimeout(function () { return observer.next("C"); }, 300);
    setTimeout(function () { return observer.complete(); }, 600);
});
console.log("# Timeout occur from B --> C");
console.log("# So C is ignored, and a fallback source is emitted");
source$.pipe(operators_1.timeoutWith(150, fallBack$)).subscribe(console.log, undefined, function () { return console.log("complete"); });
