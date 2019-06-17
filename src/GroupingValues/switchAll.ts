import { Subject, of } from "rxjs";
import { tap, endWith, delay, switchAll } from "rxjs/operators";

const origin$ = new Subject();
const sourceA$ = of("A1", "A2", "A3", "A4").pipe(
    tap(x => (x.indexOf("1") > -1 ? console.log("begin A"): "")),
    endWith("end of A")
);

const sourceB$ = of("B1", "B2").pipe(
    tap(x => (x.indexOf("1") > -1 ? console.log("begin B"): "")),
    delay(100),
    endWith("end of B")
);

const sourceC$ = of("C1", "C2", "C3").pipe(
    tap(x => (x.indexOf("1") > -1 ? console.log("begin B"): "")),
    delay(100),
    endWith("end of C")
);

console.log("# source A completes before source B comes");
console.log("# source B does not complete before source C comes");
console.log("# hence, all values from source B are ignored");

origin$.pipe(switchAll() as any).subscribe(console.log);

origin$.next(sourceA$)
setTimeout(() => origin$.next(sourceB$), 1000);
setTimeout(() => origin$.next(sourceC$), 1000);




