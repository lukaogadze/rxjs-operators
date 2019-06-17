import { of } from "rxjs";
import { delay, exhaust } from "rxjs/operators";

const source1$ = of("A", "B", "C").pipe(delay(100))
const source2$ = of("D");
of(source1$, source2$)
    .pipe(exhaust()).subscribe(console.log)