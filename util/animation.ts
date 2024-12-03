import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const slideIn = (
  direction: string,
  trigger: Element | string,
  component: Element | string,
  delay: number
) => {
  const animations: { [key: string]: { [key: string]: number | string } } = {
    up: { y: 50, autoAlpha: 0 },
    left: { x: `-200%`, autoAlpha: 0 },
    right: { x: `200%`, autoAlpha: 0 },
  };

  const from = animations[direction];
  const to = { x: 0, y: 0, autoAlpha: 1 };

  gsap.fromTo(component, from, {
    ...to,
    duration: 1,
    delay,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      toggleActions: "restart none none none",
      trigger,
    },
  });
};
export const scale = (component: HTMLElement) => {
  gsap.fromTo(
    component,
    { scale: 0.8 },
    {
      scale: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: component,
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    }
  );
};
export const wordByWord = (trigger: Element | string, component: Element) => {
  const words = component.textContent?.split(" ") || [];
  component.innerHTML = words
    .map((word) => `<span class="word">${word}</span>`)
    .join(" ");

  const wordEls = component.querySelectorAll(".word");

  gsap.fromTo(
    wordEls,
    { y: 30, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      stagger: 0.1,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        toggleActions: "restart none none none",
        trigger: trigger,
        start: "top 100%",
      },
    }
  );
};

export const charByChar = ( component: string) => {
  gsap.to(`${component} span`, {
    opacity: 1,
    y: 0,
    stagger: 0.1, 
    duration: 2,
    ease: "power2.out",
    delay: 1, 
    repeat:-1

  });
}