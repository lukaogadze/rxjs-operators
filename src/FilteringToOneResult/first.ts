import { of } from "rxjs";
import { first } from "rxjs/operators";

console.log("# just the first...");
of(0,1,2,3,4)
.pipe(first())
.subscribe(
    console.log,
    null,
    () => console.log("complete")
);

console.log("\r\n__________________\r\n");
of(1,3,5,7,9,10).pipe(first(x => x % 2 === 0)).subscribe(
    console.log,
    null,
    () => console.log("complete")
);


console.log("\r\n__________________\r\n");
of(1,3,5,7,9).pipe(first(x => x % 2 === 0)).subscribe(
    console.log,
    err => console.log(`error: ${err.message}`),
    () => console.log("complete")
);
