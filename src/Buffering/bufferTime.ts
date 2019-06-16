import { interval } from 'rxjs';
import { take, bufferTime } from 'rxjs/operators';
console.log("# create a new buffer every 1 seconds");
console.log("# and emit it after 2 seconds");
interval(1000)
.pipe(
    take(6),
    bufferTime(2000, 1000)
).subscribe(console.log);