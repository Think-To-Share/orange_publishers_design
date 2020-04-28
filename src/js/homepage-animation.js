import gsap from 'gsap';

let tl = gsap.timeline();
tl.from(".orange-banner-heading", {scale: 0.3, duration: 0.6, alpha: 0.5, ease: "power3.out"})
tl.from(".banner-content .contact-btn", {x: "-100vw", duration: 0.3})
tl.from(".banner-content .contact-btn", {scaleX: 1.2, duration: 0.2})