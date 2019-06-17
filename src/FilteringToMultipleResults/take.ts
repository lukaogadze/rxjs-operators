import { timer } from "rxjs";
import { take } from "rxjs/operators";

// take
//  the first n values and complete

const source$ = timer(0, 100);
console.log("# take the first 5 values");
source$.pipe(
    take(5)
).subscribe(
    console.log,
    null,
    () => console.log("complete")
);
