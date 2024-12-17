export default function initialAnimations(){
  const cardsToAnimate = document.querySelectorAll("[js-animate]");
    
  gsap.set(cardsToAnimate,{
      autoAlpha: 0,
      transition: "initial",
      y:15,
  })

  document.addEventListener("DOMContentLoaded", () => {
      gsap.to(cardsToAnimate,{
          autoAlpha: 1,
          stagger: 0.10,
          y: 0,
          delay: .2
      })


      }) ;
}