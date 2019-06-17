import { of, interval } from "rxjs";
import { skipLast } from "rxjs/operators";

console.log("# skip the last 2 values");
const source$ = of(1,2,3)
    .pipe(skipLast(2));
    
source$.subscribe(console.log);    


setTimeout(() => {
    console.log("# Observable must complete")
    interval(100)
        .pipe(skipLast(1))
        .subscribe(console.log);
}, 3000);


