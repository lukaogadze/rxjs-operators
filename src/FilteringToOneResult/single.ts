import { of } from "rxjs";
import { single } from "rxjs/operators";

console.log("# the one match");
of(1,2,3).pipe(single(x => x % 2 === 0)).subscribe(console.log, console.log, () => console.log("complete"));


console.log("\r\n______________________\r\n");
console.log("# no value matches");
of(1,2,3).pipe(single(x => x < 0)).subscribe(console.log, console.log, () => console.log("complete"));


console.log("\r\n______________________\r\n");
console.log("# throw error if more than one value matches");
of(1,2,3,4).pipe(single(x => x % 2 === 0)).subscribe(console.log, console.log, () => console.log("complete"));
