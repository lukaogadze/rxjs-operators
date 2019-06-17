import { of } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

const posts = [
    {postId: 1, likes: 2, author: {id: 11}},
    {postId: 2, likes: 6, author: {id: 12}},
    {postId: 3, likes: 6, author: {id: 12}},
    {postId: 4, likes: 9, author: {id: 14}},
    {postId: 5, likes: 2, author: {id: 15}},
];

console.log("# show only changes in 'likes' property from previous");
of(...posts)
    .pipe(
        distinctUntilKeyChanged("likes")
    ).subscribe(x => console.log(`${x.postId}, ${x.likes}`))


console.log("\n\n# show only changes in nested property from previous");
of(...posts)
        .pipe(
            distinctUntilKeyChanged("author", (a1, a2) => a1.id === a2.id)
        ).subscribe(console.log)
    