## What did you get?
1. A promise new Promise() has two input resolve and reject.
2. You would run function in .then() for resolve and .catch() for reject
3. can return a new promise and another .then() as the promise chain
4. you can use then(), catch(), then(), catch()... mix up for every step catch the reject

## not quiet sure
5. Promise.all([p1, p2, p3...]) pass list of promise, resolve the main Promise only when all children promises passed
6. Promise.any([p1, p2, p3...]) pass main if any of them pass
7. Promise.race([p1, p2, p3...]) only resolv first passed/reject promise (when synchronize)
8. Promise.allSettled([p1, p2, p3...])give result after all children promised been excuted
9. Promise....finally() what ever pass/reject, always excute this