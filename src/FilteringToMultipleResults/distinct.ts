import { of } from "rxjs";
import { distinct } from "rxjs/operators";

console.log("# select unique values whitin source");
of(1,2,3,3,2,1).pipe(distinct()).subscribe(console.log);

console.log("\n\n# select source-unique values as determined by function");
of(1,-1,2,3,2)
.pipe(
    distinct(x => Math.abs(x))
).subscribe(console.log)

console.log("\n\n# select distinct objects based on properties");
console.log("see also distinctUntilKeyChanged");
of({name:"Dave", isAuthor: true}, {name: "Mary", isAuthor: true}, {name:"Dave", isAuthor: true})
.pipe(distinct(item => item.name))
.subscribe(console.log);
