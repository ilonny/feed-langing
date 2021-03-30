document.addEventListener("DOMContentLoaded", function (event) {
    //animate first screen elements
    let firstAnimElements = document.querySelectorAll(".transition-animate");
    firstAnimElements.forEach((el) => {
        let forTimeout = Number(el.dataset.delay);
        setTimeout(() => {
            el.classList.remove("opacity-translate-hidden");
            el.classList.remove("opacity-hidden");
        }, forTimeout);
    });
    //click on down button - scroll to second Sections
    document.getElementById("down-icon").addEventListener("click", () => {
        console.log("clicked");
        window.scrollTo({
            top: document.getElementById("section-2").offsetTop - 280,
            behavior: "smooth",
        });
    });
    window.addEventListener("scroll", (e) => {
        // console.log("scroll", window.scrollY);
        const { scrollY } = window;
        if (scrollY > 810) {
            //animate second sections
            let animElements = document.querySelectorAll(
                ".opacity-translate-right"
            );
            animElements.forEach((el) => {
                let forTimeout = Number(el.dataset.delay);
                setTimeout(() => {
                    el.classList.remove("opacity-translate-right");
                }, forTimeout);
            });
        }
    });
});
