import { interval, timer } from "rxjs";
import { take, tap, throttle } from "rxjs/operators";

const source$ = interval(100);

source$.pipe(
    take(10),
    tap(x => console.log(`emitted from source: ${x}`)),
    throttle(y => {
        console.log(`used to calculate next observable: ${y}`);

        return timer(500);
    })
).subscribe(x => console.log(`received by subscribers: ${x}`));