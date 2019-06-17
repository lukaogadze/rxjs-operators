import { timer, of } from "rxjs";
import { take, map, delay, withLatestFrom } from "rxjs/operators";

const source$ = timer(0, 300).pipe(
    take(3),
    map(x => `A${x}`)
);

const internal1$ = timer(0, 100).pipe(
    take(10),
    map(x => `B${x}`)
);

const internal2$ = of("C").pipe(delay(10));

console.log("# at 0, source emit 0, source B emits 0");
console.log("# at 10 internal2 emits C");
console.log("# at 300 source emits 1 and internal1 emits 2");
console.log("# at 600, source emits 2 and internal emits 5 ");
console.log("# then source completes, ending the subscription");
console.log("");
source$.pipe(withLatestFrom(internal1$, internal2$)).subscribe(x => {
    console.log(x);    
})




