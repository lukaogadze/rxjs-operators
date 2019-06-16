import { timer } from "rxjs";
import { take, windowWhen, tap, mergeAll } from "rxjs/operators";

// windowWhen
// buffer values
// on receiving signal from the notifier
// send the buffer as observable
// when the source complete
// send the last buffer as an observable

const source$ = timer(0, 100).pipe(take(9));
const notifier = () => timer(200);

console.log("# emit buffer after 200 ms");

source$.pipe(
    windowWhen(notifier),
    tap(() => console.log("new buffer")),
    mergeAll()
).subscribe(console.log);