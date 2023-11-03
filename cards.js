/* the parent div/divs need to have a perspective set in styles*/
let container = document.getElementById("features");

container.querySelectorAll(".card").forEach($card => {
    let bounds;

    function rotateToMouse(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const cardRect = $card.getBoundingClientRect();
        const center = {
            x: mouseX - cardRect.left - cardRect.width / 2,
            y: mouseY - cardRect.top - cardRect.height / 2
        };

        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

        $card.style.transform = `
            scale3d(1.07, 1.07, 1.07)
            rotate3d(
                ${center.y / 100},
                ${-center.x / 100},
                0,
                -${Math.log(distance) * 2}deg
            )
        `;

        $card.querySelector(".glow").style.backgroundImage = `
            radial-gradient(
                circle at
                ${center.x * 2 + bounds.width / 2}px
                ${center.y * 2 + bounds.height / 2}px,
                #ffffff55,
                #0000000f
            )
        `;
    }

    $card.addEventListener("mouseenter", () => {
        bounds = $card.getBoundingClientRect();
        document.addEventListener("mousemove", rotateToMouse);
    });

    $card.addEventListener("mouseleave", () => {
        document.removeEventListener("mousemove", rotateToMouse);
        $card.style.transform = "";
        $card.querySelector(".glow").style.backgroundImage = "";
    });
});
