import { timer } from "rxjs";
import { take, skipUntil } from "rxjs/operators";

console.log("# ignore values before the notifier sends the signal at 3s");
timer(0, 1000)
    .pipe(
        take(6),
        skipUntil(timer(3000))
    ).subscribe(console.log);
