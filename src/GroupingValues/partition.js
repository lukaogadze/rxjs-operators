"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
console.log("# from a schedule, partition busy and free days");
var timeTable = [
    { day: "MON", status: "busy" },
    { day: "TUE", status: "busy" },
    { day: "WED", status: "busy" },
    { day: "THU", status: "busy" },
    { day: "FRI", status: "free" },
    { day: "SUN", status: "free" },
    { day: "SAT", status: "free" },
];
var _a = rxjs_1.of.apply(void 0, timeTable).pipe(operators_1.partition(function (x) { return x.status === "free"; })), free = _a[0], busy = _a[1];
console.log("# busy on");
busy.subscribe(console.log);
console.log("# free on");
free.subscribe(console.log);
