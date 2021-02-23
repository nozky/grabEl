# GrabEl
 

 --- 
## What!?

GrabEl is a function to make selecting element easy and simple.
Just import it and start using it.

This is a module, but you can easily recreate this and make it a function.
It will only select elements with @prefix at the start of an id attribute.



In your HTML, you must use 'id' attribute in any of your element you want to target and attach '@' prefix to id name. 

example.
 ` <div id="@name">Name</div>`
 ` <button id="@btn-name">Button</button>`

---
 ***My own opinion and no scientific basis***

Why id's? to differentiate id just for user interaction
and use class for just presentation.




---
### Implementation
You dont need to include '@' in your argument, only in the html.

file: index.mjs

example code:
`
import { GrabEl } from '../util/GrabEl.mjs';
 `

` 
  GrabEl('idName').addEvenlistener('click',function(){
          'your code'          
     })
 `
 or


 ` GrabEl('idName').addEvenlistener('click',function(){ otherElement.style.color='rebeccapurple'})`
 

### Problem i want to solve

- Avoid typing alot of document.querySelector('any element');
- Reusable code
- Make it simple selecting elements
- For some reason your dealing with super duper super complex form!


---
**There are a lot of way to achieve this for sure.**
>I dont know if this make any sense, if there any light util that does this, please let me know.

---
 Author: Norvillie Villaruel\
 email: norvillie.villaruel@edu.sait.ca\
 License: Open Source\
 Version: 0.1\
 Date: feb 2021



