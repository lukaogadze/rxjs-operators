"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// retry
// resubscribe on error
console.log("# retry two times");
rxjs_1.of("a", 1).pipe(operators_1.map(function (x) { return x.toUpperCase(); }), operators_1.retry(2)).subscribe(console.log, function (e) { return console.log(e.message); });
