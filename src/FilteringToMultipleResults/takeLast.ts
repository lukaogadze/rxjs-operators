import { of, interval } from "rxjs";
import { takeLast } from "rxjs/operators";

const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log("# take the last 3 values");
source$.pipe(takeLast(3)).subscribe(
    console.log,
    null,
    () => console.log("complete")
);

console.log("\r\n______________________\r\n");
console.log("# Only get 3 values, even though take specified 5");
of(1, 2, 3)
    .pipe(takeLast(5))
    .subscribe(
        console.log,
        null,
        () => console.log("complete")
    );

const source3$ = interval(100);
console.log("\r\n_______________________\r\n");
console.log("this will never emit anything, and never end, because interval doesn't have 'last' value");
source3$.pipe(takeLast(5)).subscribe(
    console.log,
    null,
    () => console.log("complete")
);    
