import { of } from "rxjs";
import { concatAll } from "rxjs/operators";

const workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const weekends = ["Saturday", "Sunday"];

console.log("# concat working days and weekends");
of(of(...workingDays), of(...weekends)).pipe(concatAll()).subscribe(
    console.log
);
