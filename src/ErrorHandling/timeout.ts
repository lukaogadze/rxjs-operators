import { Observable, Observer } from "rxjs";
import { timeout } from "rxjs/operators";

// const source$ = Observable.create((observer: Observer<string>) => {
//     observer.next("A");
//     setTimeout(() => observer.next("B"), 100);
//     setTimeout(() => observer.next("C"), 300);
//     setTimeout(() => observer.complete(), 600);
// }) as Observable<string>;

// console.log("# It takes less than 350 ms from A -->  B, B --> C, and C --> complete.");
// source$.pipe(timeout(350)).subscribe(
//     console.log,
//     undefined,
//     () => console.log("complete")
// );
// console.log("\n\n");

// const source$2 = Observable.create((observer: Observer<string>) => {
//     observer.next("A");
//     setTimeout(() => observer.next("B"), 100);
//     setTimeout(() => observer.next("C"), 300);
//     setTimeout(() => observer.complete(), 600);
// }) as Observable<string>;

// console.log("# It takes more than 150 ms from B --> C");
// source$2.pipe(timeout(150)).subscribe(
//     console.log,
//     err => console.log(err.message),
// );


// console.log("\n\n");

const source$3 = Observable.create((observer: Observer<string>) => {
    observer.next("A");
    setTimeout(() => observer.next("B"), 100);
    setTimeout(() => observer.next("C"), 300);
    setTimeout(() => observer.complete(), 600);
}) as Observable<string>;

const timeOutAt = new Date(Date.now() + 500);
console.log("# Set the data at which the source should complete");
source$3.pipe(timeout(timeOutAt)).subscribe(
    console.log,
    err => console.log(err.message),
);

