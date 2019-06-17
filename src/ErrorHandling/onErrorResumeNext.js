"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// onErrorResumeNext
//  - on error, skip the current stream
// - use a new stream as a replacement
console.log("# on error, use another stream");
var source$ = rxjs_1.of("feed1", "feed2", "feed3");
var backup$ = rxjs_1.of("handle error", "but dont't get any info about thrown error", "Oh, **also called on COMPLETE!**");
source$.pipe(operators_1.map(function (feed) {
    if (feed === "feed212") {
        throw new Error("oops - but we'll never see this!");
    }
    return feed;
}), operators_1.onErrorResumeNext(backup$)).subscribe(console.log);
