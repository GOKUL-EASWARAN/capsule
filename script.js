// Cup Animation
gsap.set('#cup', {xPercent:-50});

var rotate = gsap.timeline({
  scrollTrigger:{
    trigger: "#wrap",
    // pin: true,
    scrub:0.2,
    start: 'top top',
    
    end:'+=100000',
  }
})
.to('#cup', {
  rotation:-360*20,
  duration:1, ease:'none',
})

// leaf movements
gsap.to(".leafm1",{keyframes: [{rotation:30,x:-150,y:-20,opacity:1, duration:0.4},{rotation:35,x:-160,y:20,opacity:0.8, duration:0.5}
  ,{rotation:40,x:-165,y:40,opacity:0.6, duration:0.5},{rotation:45,x:-165,y:60,opacity:0.5, duration:0.5},{rotation:55,x:-170,y:70,opacity:0.5, duration:0.5}
  ,{rotation:75,x:-175,y:100,opacity:0.5, duration:0.5},{rotation:75,x:-165,y:120,opacity:0.5, duration:0.5},{opacity:0}

]});

gsap.to(".leafm2",{keyframes: [{rotation:30,x:200,y:-20,opacity:1, duration:0.4},{rotation:35,x:220,y:20,opacity:0.8, duration:0.5}
  ,{rotation:40,x:225,y:40,opacity:0.8, duration:0.5},{rotation:45,x:225,y:60,opacity:0.8, duration:0.5},{rotation:55,x:250,y:70,opacity:0.8, duration:0.5}
  ,{rotation:75,x:265,y:100,opacity:0.8, duration:0.5},{rotation:75,x:275,y:140,opacity:0.8, duration:0.5},,{rotation:85,x:260,y:155,opacity:0.8, duration:0.5},{opacity:0}

]});

//opacity of Elements
gsap.to("#cup",1,{rotate:-160,y:230,opacity:1});
gsap.to(".zero",0.5,{opacity:1});
gsap.to(".impact",0.5,{opacity:1});


//Leaf Parallax(Scroll faster)
const cards = document.querySelectorAll(".leaf1,.leaf2,.leaf3");
let scrollAmount = 0;
let oldScrollAmount = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  cards.forEach(card => {
    if (scrollTop + window.innerHeight > card.offsetTop) {
      if (scrollTop > oldScrollAmount) {
        scrollAmount--;  
      } else if (scrollTop < oldScrollAmount) {
        scrollAmount++;
      }
      card.style.transform = `translateY(${scrollAmount * 1.5}px)`;
    }  
  });
  oldScrollAmount = scrollTop;
});

