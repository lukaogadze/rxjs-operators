import { of } from "rxjs";
import { finalize, tap } from "rxjs/operators";

of(1).pipe(finalize(() => console.log("finalize")))
.subscribe(
    val => console.log(`value: ${val}`),
    err => console.log(`error: ${err}`),
    () => console.log("complete")
);

console.log("\r\n__________________________\r\n");
of('a', 1).pipe(
    tap((z: any) => z.toUpperCase()),
    finalize(() => console.log("finalize"))
).subscribe(
    val => console.log(`value: ${val}`),
    err => console.log(`error: ${err}`),
    () => console.log("complete")
);