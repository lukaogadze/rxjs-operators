import { timer } from "rxjs";
import { take, windowCount, switchMap, toArray } from "rxjs/operators";

// const source$ = timer(0,100).pipe(take(9));
// console.log("# buffer 2 times");
// source$.pipe(
//     windowCount(2),
//     switchMap(x => x.pipe(toArray()))
// ).subscribe(console.log);

const source$ = timer(0,100).pipe(take(9));
console.log("# buffer 2 times");
source$.pipe(
    windowCount(2, 3),
    switchMap(x => x.pipe(toArray()))
).subscribe(console.log);

