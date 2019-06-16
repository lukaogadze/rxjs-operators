import { interval } from "rxjs";
import { tap, bufferToggle, take } from "rxjs/operators";

// define open/close signals
const opening = interval(400).pipe(tap(() => console.log("open")));
const closing = () => interval(300).pipe(tap(() => console.log("close")));
// each buffer closes 300 ms after opening
interval(100)
    .pipe(
        tap(console.log),
        bufferToggle(opening, closing),
        take(3)
    ).subscribe(console.log);