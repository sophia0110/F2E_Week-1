gsap.registerPlugin(ScrollTrigger, TextPlugin);

const img_people = gsap.timeline({
  scrollTrigger: {
    trigger: ".img_people ",
    start: "top 25%",
    end: "top 1%",
    scrub: true,
  },
});

img_people.to(".img_people", {
  bottom: "70%",
  yPercent: "-48",
}).to(".img_people", {
  bottom: "50%",
  yPercent: "-68",
});

const newspaper_1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".newspaper_1 ",
    // markers: true,
    start: "top 7%",
    endTrigger: "#introduce",
    scrub: true,
  },
});

newspaper_1
  .to(".newspaper_1", {
    top: "100%",
    yPercent: "-80",
    opacity: 1,
  }) .to(".newspaper_1", {
    top: "30%",
    yPercent: "-300",
    opacity: 1,
  })
  .to(".newspaper_1", {
    top: "0",
    yPercent: "-320",
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
    start: "top 100%",
    end: "top 1%",
    scrub: true,
  },
});

card_1.to("#card_1", {
  top: 0,
  left: 0,
});

const card_3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#card_3",
    start: "top 100%",
    end: "top 1%",
    scrub: true,
  },
});

card_3.to("#card_3", {
  top: 0,
  left: 0,
});

const card_2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#card_2",
    start: "top 100%",
    end: "top 1%",
    scrub: true,
  },
});

card_2.to("#card_2", {
  top: 0,
  left: 0,
});
