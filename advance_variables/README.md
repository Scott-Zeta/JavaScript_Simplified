# What did you get?
1. "==" will do auto variables type convert in JS, so don't use it. "===" instead(compare data type)
2. specaial case. "===" will campare null and undefined as false since they are different type. 
3. for not equal, use "!=="
4. NaN, not number isn't equal to anyhing, if want to check, there is a build-in function isNaN()
5. map doesn't modify old array but create a new one
## 6. very tricky fact, the parameters in array method order is fixed, such as reduce, first one can only be accumulator(previous value), second can only be cuurent iterating elements
# I HATE THIS!
7. reduce method actually calculate(almost any method you like) all elements into one, with a initial value
8. Js expression can be written inside ${}, and impelement in `string` (backticks) `(template string)`.