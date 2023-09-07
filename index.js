gsap.to("nav",{
    backgroundColor:"white",
    scrollTrigger:{
        trigger:".content",
        scroller:"body",
        start: "top 7%",
        end: "top 6%",
        scrub:1
    }
})

gsap.to(".logo",{
    color:"#232323",
    scrollTrigger:{
        trigger:".content",
        scroller:"body",
        start: "top 7%",
        end: "top 6%",
        scrub:1
    }
})

gsap.from(".project-title",{
    x:30,
    duration:1,
    scrollTrigger:{
        trigger:".project-page",
        scroller:"body",
        start: "top 60%",
        end: "top 58%",
        scrub:3
    }
})


