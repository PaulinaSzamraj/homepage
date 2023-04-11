{
    const welcome = () => {
        console.log("Hej! Miło mi gościć Cię na mojej pierwszej stronie :)");
    }

    const toggleBackground = () => {
        const background = document.querySelector(".background");
        const themeName = document.querySelector(".themeName");

        background.classList.toggle("darkBackground");
        if (background.classList.contains("darkBackground")) {
            themeName.innerText = "jasny";
        } else {
            themeName.innerText = "ciemny";
        }
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}