import { of } from "rxjs";
import { takeWhile } from "rxjs/operators";

console.log("# take while condition is true");
of(1,2,3,1).pipe(takeWhile(val => val < 3)).subscribe(console.log);