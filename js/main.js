gsap.set("h1 span", {yPercent:-100})
gsap.set("h1", {autoAlpha:1}) // Need this to set the visibility to inherit, instead of hidden
const tl = gsap.timeline({})

tl
.to("h1 span", {duration:1, yPercent:0, stagger:0.05, ease:"expo.inOut"}) // move from "start word" and STOP to "data char"
.to("h1 span:not([data-char='.'])", {duration:1, yPercent:100, stagger:0.1, ease:"expo.inOut",}) // All but .


.to("h1 span[data-char='s']", {duration:0.5, xPercent: 5, stagger:0.2, ease:"expo.inOut",})
.to("h1 span[data-char='n']", {duration:0.5, xPercent:-30, stagger:0.3, color:"#ffff00", ease:"expo.inOut",})
.to("h1 span[data-char='r']", {duration:0.5, xPercent:-60, stagger:0.4, ease:"expo.inOut",})
.to("h1 span[data-char='d']", {
  duration:0.5, 
  xPercent: -5, 
  stagger:0.1, 
  rotate:"10", 
  color:"#ff00ff", 
  opacity:0.5, 
  ease:Elastic.easeOut.config(0.9),
  //yoyo: true,
  //repeat: -1
  }
  //, "+=2"
)
//.to("h1 span", {duration:1, x: -100}) // Too move to another location
//.to("h1 span:not([data-char='.'])", {duration:1, yPercent:100, stagger:0.1, ease:"expo.inOut",}) // Add here to reverse

 

