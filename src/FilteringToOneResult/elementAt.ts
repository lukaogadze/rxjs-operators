import { of } from "rxjs";
import { elementAt } from "rxjs/operators";

console.log("# emit only the third value");
of(1,2,3)
.pipe(
    elementAt(2)
).subscribe(console.log);
