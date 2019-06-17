import { of } from "rxjs";
import { find } from "rxjs/operators";

console.log("# first matching value: ");
of(1,2,3,4,5,6,7,8).pipe(find(x => x > 2 && x % 2 === 0)).subscribe(
    console.log,
    null,
    () => console.log("complete")
);
