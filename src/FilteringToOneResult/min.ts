import { of } from "rxjs";
import { min } from "rxjs/operators";

console.log("# min is: ");
of(1,2,-3,-1,-2,3).pipe(min()).subscribe(console.log);

console.log("\n\n# min is: ");
of(1,2,-3,-1,-2,3).pipe(min((a, b) => (Math.abs(a) > Math.abs(b) ? 1 : -1))).subscribe(console.log);
