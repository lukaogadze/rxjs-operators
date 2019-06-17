"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# max of [1,6,2,8,3,4,7,5] is: ");
rxjs_1.of(1, 6, 2, 8, 3, 4, 7, 5).pipe(operators_1.max()).subscribe(console.log);
var employiees = [
    { name: "Alice", salary: 1000 },
    { name: "Bob", salary: 1200 },
    { name: "Jane", salary: 1100 }
];
console.log("# find max using comparator function");
console.log("# employee whith the highest salary is: ");
rxjs_1.of.apply(void 0, employiees).pipe(operators_1.max(function (x, y) { return x.salary > y.salary ? 1 : -1; })).subscribe(function (x) { return console.log(x.name + " " + x.salary); });
