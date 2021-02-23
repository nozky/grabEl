




// capture all element
// add any element you want to capture or remove to limit.
// why? i think for performance issue. i dont know.
const el = document.querySelectorAll('div,input,button,h1,h2,h3,p'); //<-- maybe there is a better way to do this, let me know.

let grab ={};

// filter element that has @ prefix
// only affect on the element with @prefix, you can change if you want to, as long as not giving you error.
el.forEach( (e,index) => {
  if(e.id.charAt(0) === "@"){
      Object.assign(grab,{ [`${e.id.slice(1,e.id.length) }`] : index})
  }  
})


// export
 export const GrabEl = (idName)=>{
  return el[grab[idName]]
}
