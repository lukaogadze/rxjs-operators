"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
//#region example 1
console.log("# emit buffer of 2 values or when complete");
rxjs_1.of(1, 2, 3)
    .pipe(operators_1.bufferCount(2)).subscribe(console.log);
//#endregion
//#region example 2
console.log("\n# emit buffer of 2 values");
console.log("# start a new buffer when a new value emitted");
console.log("# multiple buffers can coexist!");
rxjs_1.of(1, 2, 3).pipe(operators_1.bufferCount(2, 1)).subscribe(console.log);
//#endregion
