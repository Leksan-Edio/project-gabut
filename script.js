const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.getElementById("navbar");

    burger.addEventListener("click", () => {
        navList.classList.toggle("active")
        burger.classList.toggle("toggle-burger")
    })
}

navSlide();

