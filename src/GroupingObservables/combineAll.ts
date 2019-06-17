import { of, interval } from "rxjs";
import { combineAll, take, delay } from "rxjs/operators";

// combineAll
// combine latest values from multiple observables
// once all sources have emmited

console.log("# one source completes without emitting values");
console.log("# the combined source complete without an values");
const source1$ = of();
const source2$ = of(1,2,3);
of(source1$, source2$).pipe(combineAll()).subscribe(x => console.log(x), null, () => console.log("complete"));


console.log("\r\n_______________________\r\n");

console.log("# latest values from all sources");
const source3$ = of(1,2,3);
const source4$ = interval(2000).pipe(take(3));
const source5$ = of(4,5,6).pipe(delay(5000));
const source6$ = of('a', 'b', 'c');

of(source3$, source4$, source5$, source6$).pipe(combineAll()).subscribe((x: Array<string | number>) => {
    console.log(x);
});



