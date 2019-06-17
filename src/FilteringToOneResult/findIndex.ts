import { of } from "rxjs";
import { findIndex } from "rxjs/operators";

console.log("# find the index of the first match: ");
of(1,2,3,4,5,6,7,8).pipe(findIndex(x => x > 2 && x % 2 === 0)).subscribe(console.log, null, () => console.log("complete"));
