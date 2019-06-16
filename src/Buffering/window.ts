import { interval } from "rxjs";
import { window, take, switchMap, toArray } from "rxjs/operators";

console.log("# emit the  buffer after 1000 ms");
interval(100)
.pipe(
    window(interval(1000)),
    take(3),
    switchMap(w => w.pipe(toArray()))
).subscribe(console.log);
