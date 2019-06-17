import { of } from "rxjs";
import { filter } from "rxjs/operators";

console.log("# filter even numbers");
of(1,2,3,4,5,6,7,8).pipe(
    filter(x => x % 2 === 0)
).subscribe(console.log);
