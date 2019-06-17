import {of} from "rxjs";
import {throwIfEmpty} from "rxjs/operators";

of().pipe(throwIfEmpty()).subscribe(
    console.log,
    x => console.log(x.message)
);
