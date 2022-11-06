gsap.registerPlugin(ScrollTrigger, TextPlugin);

const img_people = gsap.timeline({
  scrollTrigger: {
    trigger: ".img_people ",
    start: "top 75%",
    end: "top 1%",
    endTrigger: "#introduce",
    scrub: true,
  },
});

img_people.to(".img_people", {
  top: "100%",
  yPercent: "-100",
  opacity: 1,
});

const newspaper_1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".newspaper_1 ",
    start: "top 45%",
    scrub: true,
  },
});

newspaper_1
  .to(".newspaper_1", {
    top: "100%",
    yPercent: "0",
    opacity: 1,
  })
  .to(".newspaper_1", {
    top: "0",
    yPercent: "-300",
    opacity: 0,
  });

const newspaper_2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".newspaper_2 ",
    start: "top 45%",
    end: "top 1%",
    scrub: true,
  },
});

newspaper_2
  .to(".newspaper_2 ", {
    top: 0,
    yPercent: "0",
    opacity: 1,
  })
  .to(".newspaper_2", {
    top: "100%",
    yPercent: "200",
    opacity: 0,
  });

const newspaper_3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".newspaper_3 ",
    start: "top 45%",
    end: "top 1%",
    scrub: true,
  },
});

newspaper_3
  .to(".newspaper_3 ", {
    top: 0,
    yPercent: "0",
    opacity: 1,
  })
  .to(".newspaper_3", {
    top: "100%",
    yPercent: "200",
    opacity: 0,
  });

const mouse = gsap.timeline({
  scrollTrigger: {
    trigger: ".mouse",
    start: "top 20%",
    end: "top 1%",
    scrub: true,
  },
});

mouse.to(".mouse", {
  top: 0,
  yPercent: "0.05",
  opacity: 0,
  duration: 1,
  repeat: -1,
});

const card_1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#card_1",
    start: "top 120%",
    end: "top 1%",
    scrub: true,
  },
});

card_1
  .to("#card_1", {
    top: 0,
    xPercent: "-200",
  })
  .to("#card_1", {
    top: 0,
    xPercent: "0",
  });

const card_3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#card_3",
    start: "top 120%",
    end: "top 1%",
    scrub: true,
  },
});

card_3
  .to("#card_3", {
    top: 0,
    xPercent: "-200",
  })
  .to("#card_3", {
    top: 0,
    xPercent: "0",
  });

const card_2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#card_2",
    start: "top 120%",
    end: "top 1%",
    scrub: true,
  },
});

card_2
  .to("#card_2", {
    top: 0,
    xPercent: "200",
  })
  .to("#card_2", {
    top: 0,
    xPercent: "0",
  });
