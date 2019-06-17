import { of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

console.log("# emit only values if changed from previous one");
of(1,1,1,2,1,2,3)
.pipe(
    distinctUntilChanged()
).subscribe(console.log)

console.log("\n# emit only values if mapper function retrun value that changes from previous one");
of(1,-1,2,-2,1,2).pipe(distinctUntilChanged((x, y) => Math.abs(x) === Math.abs(y)))
.subscribe(console.log);
