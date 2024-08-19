const navSlide = () =. {
    conts burger = document.querySelector(".burger")
    conts navLists = document.querySelector("nav")

    burger.addEvenListener("click", () => {
        navLists.classList.toggle("nav-active")
        burger.classList.toggle("toggel-burger")
    })
};
navSlide();