import { of, Observable } from "rxjs";
import { timeoutWith } from "rxjs/operators";

const fallBack$ = of('a',"b","c");
const source$ = new Observable<string>(observer => {
    observer.next("A");
    setTimeout(() => observer.next("B"), 100);
    setTimeout(() => observer.next("C"), 300);
    setTimeout(() => observer.complete(), 600);
});

console.log("# Timeout occur from B --> C");
console.log("# So C is ignored, and a fallback source is emitted");
source$.pipe(timeoutWith(150, fallBack$)).subscribe(
    console.log,
    undefined,
    () => console.log("complete")
);

