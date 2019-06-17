import { of } from "rxjs";
import { ignoreElements } from "rxjs/operators";

of(1,2).pipe(ignoreElements()).subscribe(
    x => console.log(x),
    e => console.log(e),
    () => console.log("complete")
);