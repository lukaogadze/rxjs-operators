"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var posts = [
    { id: 1, likes: 2, comments: 0 },
    { id: 1, likes: 1, comments: 1 },
    { id: 2, likes: 2, comments: 1 },
    { id: 3, likes: 1, comments: 0 },
    { id: 2, likes: 0, comments: 1 },
    { id: 2, likes: 3, comments: 1 },
    { id: 1, likes: 0, comments: 1 },
    { id: 1, likes: 1, comments: 1 },
    { id: 1, likes: 1, comments: 1 },
    { id: 3, likes: 4, comments: 5 },
    { id: 1, likes: 1, comments: 1 },
];
var arr$ = rxjs_1.of.apply(void 0, posts).pipe(operators_1.groupBy(function (post) { return post.id; }), operators_1.mergeMap(function (group$) { return group$.pipe(operators_1.toArray()); }));
var out = [];
arr$.subscribe(function (a) { return out.push(a); });
console.log(out[1]);
console.log("\r\n___________________________\r\n");
setTimeout(function () {
    rxjs_1.of.apply(void 0, posts).pipe(operators_1.groupBy(function (post) { return post.id; }), operators_1.mergeMap(function (post$) {
        return post$.pipe(operators_1.reduce(function (acc, current) {
            acc.id = (acc.id || current.id);
            acc.likes += current.likes;
            acc.comments += current.comments;
            return acc;
        }, { id: null, likes: 0, comments: 0 }));
    })).subscribe(console.log);
}, 1000);
