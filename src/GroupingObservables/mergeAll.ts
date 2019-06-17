import { timer, of } from "rxjs";
import { take, delay, mergeAll } from "rxjs/operators";

const source1$ = timer(0, 1).pipe(take(10));
const workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const source2$ = of(...workingDays).pipe(delay(15))

const weekends = ["Saturday", "Sunday"];
const source3$ = of(...weekends).pipe(delay(5));

console.log("# merge working days and weekends");
of(source1$, source2$, source3$).pipe(mergeAll(3)).subscribe(console.log);
