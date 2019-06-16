import { interval } from "rxjs";
import { buffer, take } from "rxjs/operators";

console.log("# emit the buffer 1000ms");


interval(100)
    .pipe(
        buffer(interval(1000)),
        take(3)
    ).subscribe(console.log)