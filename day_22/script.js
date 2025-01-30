gsap.to("#nav nav", {
  y: 50,
  width: "90%",
  backgroundColor: "#0b0b0b",
  borderRadius: "15px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -20%",
    scrub: 2,
  },
});

gsap.to("#page1 #box1", {
  y: 200,
  scale: 5,
  borderRadius: 10,
  rotate: 90,
  opacity: 1,
  scrollTrigger: {
    trigger: "#box1",
    scroller: "body",
    // markers: true,
    start: "top 40%",
    end: "top -10%",
    scrub: 2,
  },
});

gsap.to("#page2 .circle", {
  scale: 6,
  y: 100,
  rotate: -180,
  borderRadius: "0px",
  scrollTrigger: {
    trigger: "#page2 .circle",
    scroller: "body",
    // markers: true,
    scrub: 3,
    start: "top 80%",
    end: "top 50%",
  },
});

gsap.to("#page3 h1", {
  y: 300,
  opacity: 1,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 20%",
    scrub: 2,
  },
});
