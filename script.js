/* ============================================================
   JOSEPH OLAMIDE BIRTHDAY WEBSITE
   COMPLETE JAVASCRIPT
   ============================================================ */


/* ============================================================
   MOBILE NAVIGATION
   ============================================================ */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen =
            navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* CLOSE MENU AFTER CLICKING A LINK */

    const navigationLinks =
        navLinks.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* ============================================================
   SECRET CODE
   ============================================================ */

const correctCode = "OLAMHIDE17";

const secretCodeInput =
    document.getElementById("secretCode");

const unlockButton =
    document.getElementById("unlockButton");

const codeMessage =
    document.getElementById("codeMessage");


if (
    unlockButton &&
    secretCodeInput &&
    codeMessage
) {

    unlockButton.addEventListener(
        "click",
        function () {

            const enteredCode =
                secretCodeInput.value
                    .trim()
                    .toUpperCase();


            if (enteredCode === correctCode) {

                codeMessage.textContent =
                    "✓ ACCESS GRANTED — OPENING YOUR PRIVATE CHAPTER...";

                codeMessage.className =
                    "success";


                setTimeout(function () {

                    window.location.href =
                        "secret.html";

                }, 1000);


            } else {

                codeMessage.textContent =
                    "✕ WRONG CODE — TRY AGAIN.";

                codeMessage.className =
                    "error";

                secretCodeInput.value = "";

            }

        }
    );


    /* ENTER KEY SUPPORT */

    secretCodeInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                unlockButton.click();

            }

        }
    );

}


/* ============================================================
   MUSIC PLAYER
   ============================================================ */

const music =
    document.getElementById("birthdayMusic");

const musicButton =
    document.getElementById("musicButton");


if (music && musicButton) {

    /*
       Restore the previous position.

       IMPORTANT:
       The music DOES NOT autoplay.
       The user must press PLAY.
    */

    const savedTime =
        localStorage.getItem(
            "birthdayMusicTime"
        );


    if (savedTime) {

        music.addEventListener(
            "loadedmetadata",
            function () {

                const time =
                    Number(savedTime);

                if (
                    Number.isFinite(time) &&
                    time >= 0 &&
                    time < music.duration
                ) {

                    music.currentTime = time;

                }

            },
            { once: true }
        );

    }


    /* MUSIC PLAYING */

    music.addEventListener(
        "play",
        function () {

            musicButton.textContent =
                "❚❚ PAUSE MUSIC";

            localStorage.setItem(
                "birthdayMusicPlaying",
                "true"
            );

        }
    );


    /* MUSIC PAUSED */

    music.addEventListener(
        "pause",
        function () {

            musicButton.textContent =
                "▶ PLAY MUSIC";

            localStorage.setItem(
                "birthdayMusicPlaying",
                "false"
            );

        }
    );


    /* SAVE CURRENT POSITION */

    music.addEventListener(
        "timeupdate",
        function () {

            localStorage.setItem(
                "birthdayMusicTime",
                music.currentTime
            );

        }
    );


    /* PLAY / PAUSE BUTTON */

    musicButton.addEventListener(
        "click",
        function () {

            if (music.paused) {

                music.play().catch(
                    function () {

                        console.log(
                            "Music could not be played."
                        );

                    }
                );

            } else {

                music.pause();

            }

        }
    );

}


/* ============================================================
   SCROLL REVEAL ANIMATION
   ============================================================ */

const revealElements =
    document.querySelectorAll(
        ".chapter-card, " +
        ".person-card, " +
        ".memory-item, " +
        ".wish-card, " +
        ".story-highlight, " +
        ".birthday-card, " +
        ".private-card, " +
        ".friendship-content, " +
        ".photo-card"
    );


if (revealElements.length > 0) {

    revealElements.forEach(
        function (element) {

            element.classList.add(
                "scroll-hidden"
            );

        }
    );


    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "scroll-show"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );

}