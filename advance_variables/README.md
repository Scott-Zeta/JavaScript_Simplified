# What did you get?
1. "==" will do auto variables type convert in JS, so don't use it. "===" instead(compare data type)
2. specaial case. "===" will campare null and undefined as false since they are different type. 
3. for not equal, use "!=="
4. NaN, not number isn't equal to anyhing, if want to check, there is a build-in function isNaN()