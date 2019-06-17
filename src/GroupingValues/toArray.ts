import { interval } from "rxjs";
import { take, toArray } from "rxjs/operators";

interval(100)
.pipe(
    take(9), toArray()
).subscribe(console.log);