"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weekends = ["Saturday", "Sunday"];
console.log("# concat working days and weekends");
rxjs_1.of(rxjs_1.of.apply(void 0, workingDays), rxjs_1.of.apply(void 0, weekends)).pipe(operators_1.concatAll()).subscribe(console.log);
