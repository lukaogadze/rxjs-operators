"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# select unique values whitin source");
rxjs_1.of(1, 2, 3, 3, 2, 1).pipe(operators_1.distinct()).subscribe(console.log);
console.log("\n\n# select source-unique values as determined by function");
rxjs_1.of(1, -1, 2, 3, 2)
    .pipe(operators_1.distinct(function (x) { return Math.abs(x); })).subscribe(console.log);
console.log("\n\n# select distinct objects based on properties");
console.log("see also distinctUntilKeyChanged");
rxjs_1.of({ name: "Dave", isAuthor: true }, { name: "Mary", isAuthor: true }, { name: "Dave", isAuthor: true })
    .pipe(operators_1.distinct(function (item) { return item.name; }))
    .subscribe(console.log);
