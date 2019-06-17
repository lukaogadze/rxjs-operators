import { timer } from "rxjs";
import { takeUntil } from "rxjs/operators";

// takeUntil
//      take values until the notifier sends signal

console.log("# take the values until the notifier sends the signal at 300ms");
timer(0, 100).pipe(
    takeUntil(timer(300))
).subscribe(
    console.log,
    null,
    () => console.log("complete")
);

