import { of } from "rxjs";
import { skipWhile } from "rxjs/operators";

// skipWhile
// skip the value while the condition held true
// once the condition becomes false, emit the coming values as
// noremal

console.log("# skip while the condition is true");
of(1,2,3,1,2,3,4)
.pipe(
    skipWhile(x => x < 3)
).subscribe(console.log);
