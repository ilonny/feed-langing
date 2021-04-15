const fadeOutEffect = () => {
    let fadeTarget = document.getElementById("cookie-wrapper");
    let fadeTarget2 = document.getElementById("cookie-wrapper-mobile");
    fadeTarget.style.opacity = 0;
    fadeTarget2.style.opacity = 0;
    setTimeout(() => {
        fadeTarget.style.display = 'none';
        fadeTarget2.style.display = 'none';
    }, 250);
    // let fadeEffect = setInterval(function () {
    //     if (!fadeTarget.style.opacity) {
    //         fadeTarget.style.opacity = 1;
    //     }
    //     if (fadeTarget.style.opacity > 0) {
    //         fadeTarget.style.opacity -= 0.1;
    //     } else {
    //         clearInterval(fadeEffect);
    //     }
    // }, 200);
}
// function removeCookieWrapper = () => {
// }

const addScript = (attribute, text, callback) => {
    var s = document.createElement('script');
    for (var attr in attribute) {
        s.setAttribute(attr, attribute[attr] ? attribute[attr] : null)
    }
    s.innerHTML = text;
    s.onload = callback;
    document.body.appendChild(s);
}

if (window.outerWidth < 1100) {
    document.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1.0");
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.mobile-wrapper').style.display = 'block';
    setTimeout(() => {
        window.location.href = "https://apps.apple.com/app/feed/id1506272777";
    }, 1500)
}
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('cookieNo').addEventListener('click', () => {
        fadeOutEffect();
    })
    document.getElementById('cookieYes').addEventListener('click', () => {
        fadeOutEffect();
        addScript({
            // src: 'https://www.google.com',
            type: 'text/javascript',
            // async: null
        }, 'console.log(1231212)', function () { });
    })
    document.getElementById('cookieNoMobile').addEventListener('click', () => {
        fadeOutEffect();
    })
    document.getElementById('cookieYesMobile').addEventListener('click', () => {
        fadeOutEffect();
        addScript({
            // src: 'https://www.google.com',
            type: 'text/javascript',
            // async: null
        }, 'console.log(1231212)', function () { });
    })
    // document.querySelector(".main-container-inner").style.minHeight =
    //     document.body.offsetHeight + "px";
    let animFired = false;
    let animFired2 = false;
    let animFired3 = false;
    //animate first screen elements
    let firstAnimElements = document.querySelectorAll(".transition-animate");
    firstAnimElements.forEach((el) => {
        let forTimeout = Number(el.dataset.delay);
        setTimeout(() => {
            window.requestAnimationFrame(() => {
                el.classList.remove("opacity-translate-hidden");
                el.classList.remove("opacity-hidden");
            })
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
        console.log("scroll", window.scrollY);
        const { scrollY } = window;
        if (scrollY > 310 && !animFired2) {
            animFired2 = true;
            //animate second sections
            let animElements = document.querySelectorAll(
                ".opacity-translate-right"
            );
            animElements.forEach((el) => {
                let forTimeout = Number(el.dataset.delay);
                setTimeout(() => {
                    window.requestAnimationFrame(() => {
                        el.classList.remove("opacity-translate-right");
                    })
                }, forTimeout);
            });
        }
        if (scrollY > 1010 && !animFired) {
            animFired = true;
            document
                .querySelector(".opacity-hidden-section-3")
                .classList.remove("opacity-hidden-section-3");
        }
        if (scrollY > 1800 && !animFired3) {
            animFired3 = true;
            let animElements = document.querySelectorAll(
                ".opacity-third-screen-hidden"
            );
            animElements.forEach((el) => {
                let forTimeout = Number(el.dataset.delay);
                setTimeout(() => {
                    window.requestAnimationFrame(() => {
                        el.classList.remove("opacity-third-screen-hidden");
                    })
                }, forTimeout);
            });
        }

        //parallax on scroll

        //
    });

    var windowHeight = window.innerHeight;

    document.addEventListener("resize", function () {
        windowHeight = window.innerHeight;
    });

    function outerHeight(el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);

        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        return height;
    }

    function parallax(el, speedFactor, outerHeight) {
        var foo = document.querySelectorAll(el);

        var getHeight;
        var firstTop;
        var paddingTop = 0;

        //get the starting position of each element to have parallax applied to it
        foo.forEach(function (subEl) {
            firstTop = subEl.getBoundingClientRect().top;
        });

        if (outerHeight) {
            getHeight = function (el) {
                return outerHeight(el);
            };
        } else {
            getHeight = function (el) {
                return el.clientHeight;
            };
        }

        // function to be called whenever the window is scrolled or resized
        function update() {
            var pos = window.scrollY;

            foo.forEach(function (subEl) {
                var element = subEl;
                var top = element.getBoundingClientRect().top;
                var height = getHeight(element);

                // element.style.top =
                //     -Math.round((firstTop - pos) * speedFactor) + "px";
                let newTransform = `translateY(${-Math.round(
                    (firstTop - pos) * speedFactor
                )}px)`;
                console.log("new transform", newTransform);
                element.style.transform = newTransform;
            });
        }
        document.addEventListener("scroll", update, true);
        document.addEventListener("resize", update);
        window.requestAnimationFrame(update)
        // update();
    }

    // parallax(".phone-3-1", -0.1);
});
