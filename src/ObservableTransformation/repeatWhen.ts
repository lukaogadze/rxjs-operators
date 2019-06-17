import { of, interval } from "rxjs";
import { startWith, repeatWhen, tap, take } from "rxjs/operators";

console.log("# repeat the sequence twice (for 3 total)");
of(1,2).pipe(
    startWith("source starting"),
    repeatWhen(() => {
        return interval(1000).pipe(
            tap(() => console.log("internal emitted")),
            take(2)
        )
    })
).subscribe(console.log, null, () => console.log("complete"));

