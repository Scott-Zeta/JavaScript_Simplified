# JavaScript

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
class can also extend for more properties and a new constructor Get/Set method like Java

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
You can also use this for raw String, like f"String" in python

## Call back
What is call back?
pass a function as a parameter to another function

Why should I use it? I can call the function directly
sometimes you want to use different function to deal with some same input data, then you could easily change which function to use as the parameter in the main function.

## forEach() and map()
both of them can iterate an array. But as recommended, if you want to create a new array/other stuff and return something, use map(). If only want to iterate array and do sometthing, use forEach() is better.
More official description: "array.forEach() executes a provided callback function once for each item in the array. array.map() creates a new array with the results of executing a provided callback function once for each item in the original array."

## Async
Code involved steps that can run at the same time with results of some steps coming in later is called asynchronous
Where should I use it in JS?  Usally waiting for load data from database or Internet.
See Async comparison about
1. No Async callback hell
2. return , then() chained Async
3. Async and Await easier for understanding and reading Async

## Search for String
startsWith(), endsWith(), includes() can be used(case sensitive). search() similar with includes, but will return the first index when input shows up

## Spread operator: ... Three dots
means duplicate all(remain) elements in the array or object
easily for concatenate the array and object
Eg. a = [a1,a2]; b = [b2,b3]
c = [...a, ...b, c1 ,c2] === [a1,a2,b1,b2,c1,c2] 

## Destruction objects
You can only pass properties with what you need in the object. By using {p1,p2...}
Eg. 
```
const peter = {name: peter,
              height: 180,
              weight: 80,
              blood presure: 800
}
const overweightTest = ({height,weight}) => {
    return weight/height**2 > 25
}

overweight(peter)
```

## Global variable and strict mode
If assign a varibale without declare it. It will automaticly become a global variable even inside a function black
To prevent this, add 'use strict' at the head of script. It will give an error when trying to do this.

## Static Method?
a method define in a class by static, means this method can be called by the className, but can not be called by the object that was created by that class.
```
class MyClass {
  static myStaticMethod(instance) {
    console.log(instance); 
  }
}

const myInstance = new MyClass();
MyClass.myStaticMethod(myInstance);  // it will print the instance
```
```
class MyClass {
  static myStaticMethod() {
    console.log("This is a static method.");
  }
}

const myInstance = new MyClass();
myInstance.myStaticMethod();  // TypeError: myInstance.myStaticMethod is not a function
```

## Getter and Setter?
Be aware, Getter and Setter are not regular method, but property accessors, so call them without parentheses
Eg:
```
class MyClass {
  constructor(brand) {
    this._brand = brand;
  }
  get brand() {
    return this._brand;
  }
  set brand(value) {
    this._brand = value;
  }
}

let myObj = new MyClass("Tesla");
console.log(myObj.brand); // "Tesla"
myObj.brand = "Mercedes";
console.log(myObj.brand); // "Mercedes"
console.log(myObj.brand()); // TypeError: myObj.brand is not a function
```
And Setter and Getter must use the same name as the property's name

## Comment and categorization
It is a good habit to use comment to put HTML and CSS into different categories. Easy to manage

# JSON
## What?
JSON stands for JavaScript Object Notation
Use in data exchange, like API request and response

## Why JSON?
Old tools: XML
```
<country>
<name>Thailand</name>
<capital>Bangkok</capital>
</country>
```
JSON:
```
{
  "name":"Thailand"
  "capital":"Bangkok"
}
```
1. less bytes, fast transfer
2. easy to read

## syntax
Alert:
1. JSON key and value(string) must surround by double quotes
2. no number start with 0
3. no trailing comma (comma after last pair)
4. no comments

## convert
1. decompress JSON String to structure: ```JSON.parse(String)``` for program processing/web page rendering
2. compress structure to JSON String:```JSON.stringfy(Structure)```for http transfer
3. sometimes you may need convert from other data type, like xml. use different type of library, may needs adjustment if data not in standard

## schema
schema is like a kind of template to check the recieve JSON is valid or not. Although build validation testing on client-end is better idea for resource usage and experience. Schema can provide security protection to prevent server-end from invalid data.(local validation can be skipped by attacker)

## JSON-LD
A standard style of JSON, provide such like standard key name. Good for JSON data communication between different apps and websites.
You can choose use JSON-LD or not. If want to implement it on legacy JSON, can use data map inside JSON.
A typicak JSON-LD with map
```
{
  "@context": {
    "@vocab": "https://www.schema.org",
    "company": "name",
    "website": "url",
    "image": "logo",
    "overview": "description"
  },
  "company": "h+ Sport",
  "website": "https://hplussport.com",
  "image": "https://hplussport.com/wp-content/uploads/2017/04/H-logo_470x271.png",
  "overview": "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles. In addition, our H+ Sport Active clothing line is made to be functional, stylish, comfortable, and durable, using all natural and organic fibers."
}
```

# CSS

## CSS?
There are three method to implement CSS
1. External (Don't use @import method, since it slow down loading because it can not download parallel)
  like 
  ```
  <head><link rel="styleSheet" href="css/style.css"></head>
  ```
2. Inline (Messy, but it can overwrite other method)
3. Internal (between ```<head><style></style></head>```. Use only for short block for one page)

## CSS selector
1. type selector
```
* {
  (astroid for all elements)
}
h1 {
  (for all h1 headline)
}
```
2. class selector
```
.classname {
  (for all with same class)
}
```

one HTML element can have multiple class, such as
```
<p class = "section1">A<\p>
<p class = "group1">B<\p>
<p class = "section1 group1">C<\p>
```

select by chain up class name:
```
.section1 {
  (will select A and B)
}
.group1 {
  (will select B and C)
}
.section1 .group1{
  (will only select C)
}
.section1,.group1{
  (will select A,B,C all)
  (, grouping selector, element beside the comma are independent each other)
}
```
3. ID selector
```
#ID {
  (select the element with this ID)
}
```
Alert, ID selector can be only called once
Additional:
Anchor tag: ID selector can be used in link to scroll to that element
```
<a href = "#ID">Go to the spot with ID</a>
<p id ="ID">target</p> 
```
4. Advance: Descendant Selector
```
<section class="container">
	<p><a href="#">A</a></p>
	<a href="#">B</a>
</section>

<a href="#">C</a>
```
```
a {
/*   color: black; */
(select ABC)
}
section a {
/*   color: green; */
(select A and B, decendent selector will skip level, so all link contained in the section)
}
.container a {
/*   color: orange; */
(A and B, as the same but use id)
}
section p a {
/*   color: pink; */
(Only A, it has a complete path)
}
.container p a {
/*   color: green; */
(same)
}
```
5. Hierarchy Specificity
overwrite flow ID => class => type => universal
"font-size: 10px!important" will overwrite all specificity

6. Advance: Pseudo-class selector
```
a:link (a link has not been clicked default blue)
a:visited (a linke has been clicked default purple)
a:hover
a:active(when clicking on it)
a:focus(use tab to focus, default is a rectangle around the link)
```
## Inline, block, display
1. set Inline or block display as inline-block]
```
span/div {
  display: inline-block
}
```
can make it show as the block side by side like a line but implement the height and width like a block
But inline does not have top and buttom margin, but can use inline-block instead
2. margin collapse
bottom margin will overlap with next element's top margin
center algin:
```
.example {
  width:500px;
  margin: 0 auto;
}
```

## Flex and Grid
No one use stupid float anymore!
Flexbox for one dimensional(row or coloumn)
Grid for two dimensional

## Flex box
```
<div class="contianer">
.container{
  display: flex /inline-flex
  flex-direction: row/row-reverse, column/column-reverse (parallel or vertical layout)
  flex-wrap: nowrap/wrap (nowrap: items would fill a line if not enough, shrikn if more. wrap: extra item will go to next row)
  align-items:center
  justify-content:center (the layout of item inside, change the distribute but not the size of item)
}
```
Change the way of flex box container, inline-flex like text, change to new line until previous one full
flex only on one axis like up to down
```
.flex-item {
  flex-grow: 0~1(default 0), no expand to auto fill if there is extra space
  flex-shrink: 0~1(default 1), auto shrink to fit the line or overflow
  flex-basis: x px, ideal size of each value 
}
```

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
