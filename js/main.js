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
