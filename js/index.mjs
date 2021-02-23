//module import
import { GrabEl } from '../util/GrabEl.mjs';


// div
GrabEl('one').addEventListener('click',()=>{
  alert('its working..')
})

GrabEl('change-color').addEventListener('click',(e)=>{
  GrabEl('wrapper').style.background ='red';
})



//ex: form elements
GrabEl('btnTest').addEventListener('click',()=>{
  alert(GrabEl('txtTest').value);
})


GrabEl('click').addEventListener('click',()=>{
  console.log('button click')
})


GrabEl('click2').addEventListener('click',()=>{
  console.log('click2')
})

GrabEl('only').addEventListener('click',()=>{
  console.log('only')
})