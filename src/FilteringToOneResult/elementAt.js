"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# emit only the third value");
rxjs_1.of(1, 2, 3)
    .pipe(operators_1.elementAt(2)).subscribe(console.log);
