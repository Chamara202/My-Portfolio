// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Header Animation
    gsap.from(".header h1", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".header p", {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.5,
        ease: "power2.out"
    });

    // Navbar Animation on Scroll
    gsap.from(".navbar a", {
        scrollTrigger: {
            trigger: ".navbar",
            start: "top 90%",
            toggleActions: "play none none"
        },
        duration: 0.5,
        y: 20,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });

    // About Section Animation
    gsap.from("#about h2", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from("#about p", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.5,
        ease: "power2.out"
    });

    // Projects Section Animation
    gsap.from(".project-card", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: 0.7,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Skills Section Animation
    gsap.from("#skills h2", {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".skill-item", {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: 0.7,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Contact Section Animation
    gsap.from("#contact h2", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from("#contact p, .whatsapp-btn, #contact-form", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: 0.7,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });
});

// Function to fill skill bars based on data-skill attribute
function animateSkillBars() {
    const skillBars = document.querySelectorAll(".skill-level");

    skillBars.forEach(skillBar => {
        const skillLevel = skillBar.getAttribute("data-skill");
        
        gsap.fromTo(skillBar, 
            { width: "0%" }, 
            {
                width: skillLevel + "%",
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: skillBar,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            }
        );
    });
}

// Call animateSkillBars after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    animateSkillBars();
});

