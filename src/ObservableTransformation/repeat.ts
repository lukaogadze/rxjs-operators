import { of } from "rxjs";
import { repeat } from "rxjs/operators";

console.log("# emit twice");
of(1,2,3).pipe(repeat(2)).subscribe(x => console.log(x), null, () => console.log("complete"));

