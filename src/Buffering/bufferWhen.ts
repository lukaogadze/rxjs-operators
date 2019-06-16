import { interval } from "rxjs";
import { take, tap, bufferWhen } from "rxjs/operators";

console.log("# vary buffer clearing based on value from interval");
let x = 0;
interval(500)
.pipe(
    take(10),
    tap(i => (x = i)),
    bufferWhen(() => {
        // vary buffer closing
        if (x < 5) {
            return interval(1000);
        }
        return interval(500)
    })
).subscribe(console.log);