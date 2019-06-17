import { of, interval } from "rxjs";
import { last } from "rxjs/operators";

of(1,2,3).pipe(last()).subscribe(console.log);

console.log("\r\n_________________________\r\n");

of(1,2,3).pipe(last(x => x % 2 === 0)).subscribe(console.log);

console.log("\r\n_________________________\r\n");
console.log("# call last on empty sequence causes error");
of().pipe(last()).subscribe(
    x => console.log(`last: ${x}`),
    error => console.log(`error: ${error.message}`)
)


console.log("\r\n_________________________\r\n");

interval().pipe(last()).subscribe(x => console.log(`last: ${x}`), error => console.log(`error: ${error.message}`));
