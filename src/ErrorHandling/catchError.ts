import { throwError, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

// catchError
// pervent the error from stoppin the stream
// replace the error whit a new source

console.log("# catch then rethrow the error");
throwError("error")
.pipe(
    catchError((err: string) => {
        console.log(`caught an error: ${err}`);
        return throwError(`rethrow: ${err}`);
    }),
    catchError(err => {
        console.log(err);
        return of(undefined);
    })
).subscribe(x => {
    if (x !== undefined) {
        console.log(x)
    }    
},
() => console.log("oops"),
() => console.log("complete")
);


console.log("\n\n***********************************");
console.log("# catch something unexpected");
of('a',1)
.pipe(
    map((x: any) => x.toUpperCase()),
    catchError(() => {
        return of(undefined)
    })
).subscribe(d => {
    if(d) {
        console.log(d);        
    }
},
() => console.log("oops"),
() => console.log("complete")
)

