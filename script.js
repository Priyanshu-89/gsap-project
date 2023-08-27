// var gsap=gsap.timeline()

gsap.to("#nav", {
    backgroundColor: "#fff",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
})


gsap.from("#nav h1,#nav #part2 a", {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2
})


gsap.from("#img1", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    y: 60,
    scale: 0,
   
})

gsap.from("#img2", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    x: 60,
    scale: 0,
    
})


gsap.from("#img3", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    x: 60,
    scale: 0,
  
})

gsap.from("#main>h1", {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2,
    scale: 0

})

gsap.from("#section-2  #heading", {
    x: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: "#section-2 #heading",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 30%",
        // scrub:2
    }

})

gsap.from("#section-2 h1", {
    x: -100,
    duration: 1,
    // delay:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: "#section-2 #heading",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 30%",
        // scrub:2
    }


})

gsap.from("#section-2 a", {
    y: 30,
    repeat: -1,
    duration: 0.3,
    yoyo: true,
    scrollTrigger: "#section-2 a"
})

gsap.from("#section-3 #image-section #image1,#image2,#image3,#image4", {
    x: 100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    scale:0,
    scrollTrigger: {
        trigger: "#section-3 #image-section #image1,#image2,#image3,#image4",
        scroller: "body",
    }

})
// *******************section-5 gsap *********************** 
gsap.from("#section-5 #img-left,#img-right", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    x: 100,
    scale: 0,
    scrollTrigger: {
        trigger: "#section-5 #img-left,#img-right",
        scroller: "body",
    }
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  


  gsap.from("#footer-section h1, div h3,h4", {
    y: -100,
    delay: 0.4,
    opacity: 0,
    duration: 1,
    scale:0,
    scrollTrigger: {
        trigger: "#footer-section h1, div h3,h4",
        scroller: "body"
      
        
    }
})