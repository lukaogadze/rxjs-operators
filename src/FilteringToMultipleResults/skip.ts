import { of } from "rxjs";
import { skip } from "rxjs/operators";

of(1,2,3).pipe(skip(2)).subscribe(console.log);