import { of } from "rxjs";
import { map, onErrorResumeNext } from "rxjs/operators";

// onErrorResumeNext
//  - on error, skip the current stream
// - use a new stream as a replacement
console.log("# on error, use another stream");
const source$ = of("feed1", "feed2", "feed3");
const backup$ = of(
    "handle error",
    "but dont't get any info about thrown error",
    "Oh, **also called on COMPLETE!**"
);

source$.pipe(
    map(
        feed  => {
            if (feed === "feed212") {
                throw new Error("oops - but we'll never see this!");
            }
            return feed;
        }
    ),
    onErrorResumeNext(backup$)
).subscribe(console.log);
