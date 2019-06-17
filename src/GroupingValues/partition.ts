import { of } from "rxjs";
import { partition } from "rxjs/operators";

console.log("# from a schedule, partition busy and free days");


const timeTable = [
    {day: "MON", status: "busy"},
    {day: "TUE", status: "busy"},
    {day: "WED", status: "busy"},
    {day: "THU", status: "busy"},
    {day: "FRI", status: "free"},
    {day: "SUN", status: "free"},
    {day: "SAT", status: "free"},
];

const [free, busy] = of(...timeTable).pipe(partition((x: any) => x.status === "free") as any) as any;
console.log("# busy on");
busy.subscribe(console.log);

console.log("# free on");
free.subscribe(console.log);
