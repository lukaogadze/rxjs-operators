"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var posts = [
    { postId: 1, likes: 2, author: { id: 11 } },
    { postId: 2, likes: 6, author: { id: 12 } },
    { postId: 3, likes: 6, author: { id: 12 } },
    { postId: 4, likes: 9, author: { id: 14 } },
    { postId: 5, likes: 2, author: { id: 15 } },
];
console.log("# show only changes in 'likes' property from previous");
rxjs_1.of.apply(void 0, posts).pipe(operators_1.distinctUntilKeyChanged("likes")).subscribe(function (x) { return console.log(x.postId + ", " + x.likes); });
console.log("\n\n# show only changes in nested property from previous");
rxjs_1.of.apply(void 0, posts).pipe(operators_1.distinctUntilKeyChanged("author", function (a1, a2) { return a1.id === a2.id; })).subscribe(console.log);
