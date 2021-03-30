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
            top: document.getElementById("section-2").offsetTop - 120,
            behavior: "smooth"
        });
    });
});
