"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// catchError
// pervent the error from stoppin the stream
// replace the error whit a new source
console.log("# catch then rethrow the error");
rxjs_1.throwError("error")
    .pipe(operators_1.catchError(function (err) {
    console.log("caught an error: " + err);
    return rxjs_1.throwError("rethrow: " + err);
}), operators_1.catchError(function (err) {
    console.log(err);
    return rxjs_1.of(undefined);
})).subscribe(function (x) {
    if (x !== undefined) {
        console.log(x);
    }
}, function () { return console.log("oops"); }, function () { return console.log("complete"); });
console.log("\n\n***********************************");
console.log("# catch something unexpected");
rxjs_1.of('a', 1)
    .pipe(operators_1.map(function (x) { return x.toUpperCase(); }), operators_1.catchError(function () {
    return rxjs_1.of(undefined);
})).subscribe(function (d) {
    if (d) {
        console.log(d);
    }
}, function () { return console.log("oops"); }, function () { return console.log("complete"); });
