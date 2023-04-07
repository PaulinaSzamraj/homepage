console.log("Hej! Miło mi gościć Cię na mojej pierwszej stronie :)");

let button = document.querySelector(".js-button");
let background = document.querySelector(".background");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    background.classList.toggle("darkBackground");

    if(background.classList.contains("darkBackground")) {
        themeName.innerText = "jasny";
    } else {
        themeName.innerText = "ciemny";
    }
});
