$('a[href*=\\#]').on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 300);
});

var tl = gsap.timeline();
var nameClip = "polygon(-20% 0, 100% 0, 100% 100%, -20% 100%, -17% 80%, -13% 65%, -13% 35%, -17% 20%)";
var codeClip = "circle(75% at 50% 50%)";

tl.to("#cog", {
    duration: 0.6,
    scale: 1,
    ease: "power3.out",
    delay: 0.2
})
    .to('#cog', {
        duration: 0.6,
        x: 160,
        rotate: 120,
        ease: "power3.out"
    })
    .to('#cog', {
        duration: 0.8,
        x: 0, rotate: -180,
        ease: "power3.out"
    })
    .to('#name', { duration: 0.9, clipPath: nameClip, ease: "power3.out" }, "<")
    .to('#code', { duration: 0.2, clipPath: codeClip }, "<0.23")
    .to('.logo', { duration: 0.5, transform: "translate(0px, 0px) scale(1)", ease: "power3.out" })
    .to('.links', {
        opacity: 1,
        transform: "translateY(0px)",
        duration: 0.5
    })
    .to('.text1', {
        opacity: 1,
        transform: "translateX(0px)",
        duration: 0.5
    }, "-=.2")
    .to('.text2', {
        transform: "scale(1)",
        opacity: 1,
        duration: 0.5
    }, "-=0.5")
    .to(".text3", {
        transform: "translateX(0px)",
        opacity: 1,
        duration: 0.5
    }, "-=0.5")
    .to('.cta', {
        opacity: 1,
    })
    .from('.hero-svg img', {
        opacity: 0,
        transform: "translate(48%)"
    }, "-=.5")
    .from('.hexagons', {
        opacity: 0,
        transform: "translate(-200px)"
    }, "-=.5")