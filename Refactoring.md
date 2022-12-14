# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

### `hashing.js` file

I have been created one file `hashing.js` which contains generateHash function

**Why?**

- To apply **`DRY`** concept (do not repeat yourself)
- Reduce the amount of code which has a good effect on (code `readability`,`testing`,`maintainability`)
- To apply single source of truth and a single place of change which helps to make code more cleaner and reduce cost of change and update.

### `dpk.js` file

I have removed the duplicated code which enhance the performance and also reduce complexity of the code.

- By Applying `fail first rule`.
- Using the ternary operator in case there is an event passed to the function (`Readable & clean`)

### `dpk.test.js`

I have added test cases:

- no event given status `passed`
- Passing the event parameter without partitionKey status `passed`
- Passing the event parameter with partitionKey and it's length more than 256 status `passed`
- Passing the event parameter with partitionKey and it's length less than 256 status `passed`

### `package.json`

I added one more script `e2e-test` script which run the `deterministicPartitionKey` function in all cases
