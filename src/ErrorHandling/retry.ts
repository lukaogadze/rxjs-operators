import { of } from "rxjs";
import { map, retry } from "rxjs/operators";

// retry
// resubscribe on error
console.log("# retry two times");

of("a", 1).pipe(
    map((x: any) => x.toUpperCase()),
    retry(2)
).subscribe(
    console.log,
    e => console.log(e.message)
);