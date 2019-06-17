import { of } from "rxjs";
import { max } from "rxjs/operators";

console.log("# max of [1,6,2,8,3,4,7,5] is: ");
of(1, 6, 2, 8, 3, 4, 7, 5).pipe(max()).subscribe(console.log);


const employiees = [
    { name: "Alice", salary: 1000 },
    { name: "Bob", salary: 1200 },
    { name: "Jane", salary: 1100 }
];
console.log("# find max using comparator function");
console.log("# employee whith the highest salary is: ");
of(...employiees).pipe(
    max((x, y) => x.salary > y.salary ? 1 : -1)
).subscribe(x => console.log(`${x.name} ${x.salary}`));


