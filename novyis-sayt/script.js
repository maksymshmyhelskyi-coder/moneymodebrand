document.addEventListener("DOMContentLoaded", () => {
    const revealEls = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.16 }
    );

    revealEls.forEach((el) => observer.observe(el));
});
window.addEventListener("load", () => {
    // убираем #community / #hero из адресной строки, если есть
    if (window.location.hash) {
        history.replaceState(
            "",
            document.title,
            window.location.pathname + window.location.search
        );
    }

    // скроллим в самый верх
    window.scrollTo(0, 0);
});
// Активный пункт меню при скролле
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const navObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;

                    navLinks.forEach((link) => {
                        const href = link.getAttribute("href"); // типа "#hero", "#manifesto" и т.д.
                        if (href === `#${id}`) {
                            link.classList.add("active");
                        } else {
                            link.classList.remove("active");
                        }
                    });
                }
            });
        },
        {
            threshold: 0.45
        }
    );

    sections.forEach((section) => navObserver.observe(section));
});