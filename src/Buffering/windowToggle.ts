import { timer } from "rxjs";
import { take, windowToggle, switchMap, toArray } from "rxjs/operators";

// windowToggle
// open a new buffers whenever received an opening signal
// after opened, the buffer stays until a closing signal is received
// then, send the buffer as a stream

console.log("# open a new buffer every 500 ms");
console.log("# close the buffer 200 ms after opening");
console.log("# hence, ignore those come between 200 ms and 500 ms");
const openings = timer(0, 500);
const closing = () => timer(200);

timer(0, 100).pipe(take(36), windowToggle(openings, closing), switchMap(s => s.pipe(toArray()))).subscribe(console.log);


