import { bufferCount } from "rxjs/operators";
import { of } from "rxjs";

//#region example 1
console.log("# emit buffer of 2 values or when complete");
of(1,2,3)
.pipe(
    bufferCount(2)
).subscribe(console.log)
//#endregion

//#region example 2
console.log("\n# emit buffer of 2 values");
console.log("# start a new buffer when a new value emitted");
console.log("# multiple buffers can coexist!");
of(1,2,3).pipe(bufferCount(2,1)).subscribe(console.log);


//#endregion

