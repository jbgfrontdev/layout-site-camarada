document.addEventListener('DOMContentLoaded', () => {
    const tl1 = gsap.timeline({
        scrollTrigger:'#plans',
        pin: true,   // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    })

    const tl2 = gsap.timeline({
        scrollTrigger:'#about .card',
        pin: true,   // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    })

    gsap.registerPlugin(ScrollTrigger)
    const cards = document.querySelectorAll('.card')
    const aboutTitle = document.querySelector('#about-title')

    cards.forEach(card => {
        tl1.from(card, { duration: .5, opacity: 0, y: 20, x: 20, delay: 0.5})
    });

    tl2
    .from(aboutTitle, { duration: 1, opacity: .8, x: -200,  delay: .8})

});