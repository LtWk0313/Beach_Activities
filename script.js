let head=document.querySelector("header");
let kayak=document.querySelector("#kayakimg");
let paddle=document.querySelector("#SUPimg");
let button=document.querySelector("#btn3");

button.addEventListener('click',right);

function fadeinsections(section){
    let CameraRoll2 = gsap.timeline();
    console.log(section);
    CameraRoll2.to(section,{
      opacity: 1,    
      duration: 5, 
      delay: 0.75,
      ease: "rough({template:none.out, strength:1, points:20, taper:none, randomize:true, clamp:false})"
      })
  }

 fadeinsections(head);

 function right(event){
    let CameraRoll1 = gsap.timeline();
    CameraRoll1.to(kayak,
    {x: 400,
     duration: 5
    }),
    CameraRoll1.to(paddle,
    {x: -400,
    duration: 5
    })
}