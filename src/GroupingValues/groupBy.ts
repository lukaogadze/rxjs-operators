import { of } from "rxjs";
import { groupBy, mergeMap, toArray, reduce } from "rxjs/operators";

const posts = [
    {id: 1, likes: 2, comments: 0},
    {id: 1, likes: 1, comments: 1},
    {id: 2, likes: 2, comments: 1},
    {id: 3, likes: 1, comments: 0},
    {id: 2, likes: 0, comments: 1},
    {id: 2, likes: 3, comments: 1},
    {id: 1, likes: 0, comments: 1},
    {id: 1, likes: 1, comments: 1},
    {id: 1, likes: 1, comments: 1},
    {id: 3, likes: 4, comments: 5},
    {id: 1, likes: 1, comments: 1},
];

const arr$ = of(...posts).pipe(
    groupBy(post => post.id),
    mergeMap(group$ => group$.pipe(toArray()))
);

const out: any[] = [];
arr$.subscribe(a => out.push(a));
console.log(out[1]);

console.log("\r\n___________________________\r\n");
setTimeout(() => {
    of(...posts).pipe(
        groupBy(post => post.id),
        mergeMap(post$ => {
            return post$.pipe(
                reduce(
                    (acc, current) => {
                        acc.id = (acc.id || current.id) as any;
                        acc.likes += current.likes;
                        acc.comments += current.comments;
                        return acc;
                    },
                    {id: null, likes:0, comments: 0}
                )
            )        
        })
    ).subscribe(console.log)
}, 1000)
