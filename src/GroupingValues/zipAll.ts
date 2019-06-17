import { of, timer } from "rxjs";
import { zipAll, take, map } from "rxjs/operators";

console.log("# collect pairs");
const source1$ = of("A", "1","a");
const source2$ = of("B","2","b");
of(source1$, source2$).pipe(zipAll()).subscribe(console.log);

console.log("\r\n_________________________\r\n");

const source$ = of(
    timer(0, 100).pipe(
        take(3),
        map(x => 'a' + x)
    ),
    timer(0, 300).pipe(
        take(3),
        map(x => "b" + x)
    ),
    timer(0, 500).pipe(
        take(3),
        map(x => "c" + x)
    )
);

console.log("# values from different sources emit at different times");
source$.pipe(zipAll()).subscribe(x => console.log(x));

