import { timer } from "rxjs";
import { take, windowTime, switchMap, toArray } from "rxjs/operators";

const source$ = timer(0, 100).pipe(take(9));
console.log("# emit buffer after 200 ms");
source$.pipe(
    windowTime(200),
    switchMap(x => x.pipe(toArray()))
).subscribe(console.log);


