import { of } from "rxjs";
import { pairwise, filter, first } from "rxjs/operators";


const vals = [1,2,3,4,5,6,7,8,9];

console.log("# pairs of values");
of(...vals)
    .pipe(pairwise()).subscribe(console.log, null, () => console.log("complete"));


console.log();
console.log("# find first number decrease");
const nums = [10, 12, 10, 16, 20];
of(...nums).pipe(
    pairwise(),
    filter(([p1, p2]) => p1 - p2 < 0),
    first()
).subscribe(([p1, p2]) => console.log(`decrease found: ${p1} to ${p2}`));