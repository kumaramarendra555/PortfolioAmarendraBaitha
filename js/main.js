function toggleAbout() {
    const content = document.getElementById("aboutMore");
    const button = document.querySelector(".see-more-btn");

    content.classList.toggle("active");

    if (content.classList.contains("active")) {
        button.innerHTML =
            '<i class="fas fa-chevron-up"></i> Show Less';
    } else {
        button.innerHTML =
            '<i class="fas fa-chevron-down"></i> See More';
    }
}
