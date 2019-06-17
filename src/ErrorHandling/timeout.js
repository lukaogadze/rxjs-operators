"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// const source$ = Observable.create((observer: Observer<string>) => {
//     observer.next("A");
//     setTimeout(() => observer.next("B"), 100);
//     setTimeout(() => observer.next("C"), 300);
//     setTimeout(() => observer.complete(), 600);
// }) as Observable<string>;
// console.log("# It takes less than 350 ms from A -->  B, B --> C, and C --> complete.");
// source$.pipe(timeout(350)).subscribe(
//     console.log,
//     undefined,
//     () => console.log("complete")
// );
// console.log("\n\n");
// const source$2 = Observable.create((observer: Observer<string>) => {
//     observer.next("A");
//     setTimeout(() => observer.next("B"), 100);
//     setTimeout(() => observer.next("C"), 300);
//     setTimeout(() => observer.complete(), 600);
// }) as Observable<string>;
// console.log("# It takes more than 150 ms from B --> C");
// source$2.pipe(timeout(150)).subscribe(
//     console.log,
//     err => console.log(err.message),
// );
// console.log("\n\n");
var source$3 = rxjs_1.Observable.create(function (observer) {
    observer.next("A");
    setTimeout(function () { return observer.next("B"); }, 100);
    setTimeout(function () { return observer.next("C"); }, 300);
    setTimeout(function () { return observer.complete(); }, 600);
});
var timeOutAt = new Date(Date.now() + 500);
console.log("# Set the data at which the source should complete");
source$3.pipe(operators_1.timeout(timeOutAt)).subscribe(console.log, function (err) { return console.log(err.message); });
