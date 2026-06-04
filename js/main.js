function toggleAbout() {
          const content = document.getElementById("aboutMore");
          const text = document.getElementById("aboutBtnText");

          if (window.getComputedStyle(content).display === "none") {
                    content.style.display = "block";
                    text.innerText = "Read Less";
          } else {
                    content.style.display = "none";
                    text.innerText = "Read More";
          }
}
function toggleProject(id) {
          const content = document.getElementById(id);

          if (content.style.display === "block") {
                    content.style.display = "none";
          } else {
                    content.style.display = "block";
          }
}
function toggleTable(id) {
          const content = document.getElementById(id);

          if (content.style.display === "block") {
                    content.style.display = "none";
          } else {
                    content.style.display = "block";
          }
}

document.addEventListener("DOMContentLoaded", () => {
          const gallery = document.querySelector(".iphone-gallery");
          const cards = document.querySelectorAll(".iphone-frame");

          let currentIndex = 0;

          setInterval(() => {
                    currentIndex++;

                    if (currentIndex >= cards.length) {
                              currentIndex = 0;
                              gallery.scrollTo({
                                        left: 0,
                                        behavior: "smooth"
                              });
                    } else {
                              gallery.scrollTo({
                                        left: currentIndex * (cards[0].offsetWidth + 20),
                                        behavior: "smooth"
                              });
                    }
          }, 2000);
});

cards[currentIndex].scrollIntoView({
          behavior: "smooth",
          inline: "center"
});
