## remember, only use defer or Async to open JS

You can divide a JS file into modules,(need to import and export). Set the <script>type = "module" src = ...</script>
module type will automaticlly runs in defer (This idea is from framework)

module can not be access directly in the console. So put object may not a good idea.

## access property
Two type of access
1. dot format, as the regular java  Object.property
2. bracket format. Object["PropertyInString"]
why use this? 
1. When property is a variable (variable shoudl be String)
let target = "prop1"
target = "prop2"
Object[target]
2. Sometimes property name may not follow the rule (When dealing with existing code)
Object["Name+ShouldNotHavePlus"]

## Function inside the object:method
format:
const object = {
functionName(input){
    this.property = ....;
    do something;
}
}
excute:

object.functionName(input)

## Atention, Arrow function can not be used for method inside the class
Arrow functions don't have their own bindings to this , arguments , or super , and should not be used as methods. Arrow functions cannot be used as constructors. Calling them with new throws a TypeError . They also don't have access to the new.target keyword.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

## Template Literal
```
content = `.......` surronded by " ` "
const content = `
  <main>
    <article>
      <h1>${everydayPack.name}</h1>
      <ul>
        <li>Volume: ${everydayPack.volume}</li>
        <li>Color: ${everydayPack.color}</li>
        <li>Age: ${everydayPack.backpackAge()}</li>
        <li>Number of pockets: ${everydayPack.pocketNum}</li>
        <li>Left strap length: ${everydayPack.strapLength.left}</li>
        <li>Right strap length: ${everydayPack.strapLength.right}</li>
        <li>Lid status: ${everydayPack.lidOpen}</li>
      </ul>
    </article>
  </main>
`;
```

document.body.innerHTML = content;
Inject into the innerHTML, JS variable surrounded with ${}

## Call back
What is call back?
pass a function as a parameter to another function

Why should I use it? I can call the function directly
sometimes you want to use different function to deal with some same input data, then you could easily change which function to use as the parameter in the main function.

# JavaScript_Simplified
https://courses.webdevsimplified.com/

# LinkedInLearning
https://www.linkedin.com/learning/javascript-essential-training

## What the fck is this?
After I took some React course, I found I spent most of time on syntax. So it is time to step back to some basic JS and Web dev knowledge.

## Why do you pay for this?
Through his discription, I can see this guy, Kyle Cook, knew a lot of typical problem that could happend on learner. That is the reason why I would like to have a try.

## Why don't you get through free self study materials?
I don't think it is a shame for paying for knowledge or reflect you have weaker ability than other, especially if one could get some shortcut and avoid waste of time. Every problem can be solved only by money is a good problem. That is it.

## What is JSX?
A Syntax Extension of JavaScript for React. allows you to write HTML-like elements in your JavaScript code.
