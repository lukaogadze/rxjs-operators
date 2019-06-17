"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// retryWhen
//
var swallowError = true;
rxjs_1.interval(200)
    .pipe(operators_1.map(function (x) {
    console.log('attempting: ' + x);
    if (x === 1) {
        throw 'error processing: ' + x;
    }
    return x;
}), operators_1.retryWhen(function (errors) {
    if (swallowError) {
        return errors.pipe(operators_1.tap(function (err) { return console.log(err); }), operators_1.scan(function (acc) { return acc + 1; }, 0), operators_1.tap(function (retryCount) {
            if (retryCount === 2) {
                console.log('Swallowing error and completing');
            }
            else {
                console.log('Retrying whole source - retry #' + retryCount);
            }
        }), operators_1.takeWhile(function (retryCount) { return retryCount < 2; }));
    }
    else {
        return errors.pipe(operators_1.tap(function (err) { return console.log(err); }), operators_1.scan(function (acc) { return acc + 1; }, 0), operators_1.tap(function (retryCount) {
            if (retryCount === 2) {
                console.log('Failing');
                throw 'oops';
            }
            else {
                console.log('Retrying whole source - retry #' + retryCount);
            }
        }));
    }
}))
    .subscribe(function (x) { return console.log('successfully processed: ' + x); }, function (err) { return console.log('*****error: ' + err); }, function () { return console.log('completed successfully'); });
