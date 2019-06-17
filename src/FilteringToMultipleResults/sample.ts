import { interval, Observable } from "rxjs";
import { sample, take } from "rxjs/operators";

const source$ = interval(100);
const notifier$ = new Observable<void>(observer => {
    setTimeout(() => observer.next(), 150);
    setTimeout(() => observer.next(), 350);
    setTimeout(() => observer.complete(), 750);
});

console.log("# the source emit values every 100 ms");
console.log("# the notifier signals at 150 ms, 350 ms and 750 ms");
console.log("# at 150 ms, the latest value is 0");
console.log("# at 350 ms, the latest value is 0");
console.log("# at 750ms, the latest value is 6");

source$.pipe(
    sample(notifier$),
    take(3)
).subscribe(console.log);
