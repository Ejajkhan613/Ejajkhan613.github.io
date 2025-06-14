// // Auto Typing
var typed = new Typed("#auto-type", {
  strings: ["Communication Skills", "Remote Work", "Collaboration"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});


function resume(){
  window.open("./Ejajul_Ansari_Backend_Developer_Resume.pdf", "_blank");
}




// video play on hover
let playing = document.querySelectorAll(".vid");

for (let play of playing) {
  play.addEventListener("mouseover", function (e) {
    play.play();
  });

  var vid = document.querySelector(".project-card>video");
  play.playbackRate = 0.5;

  play.addEventListener("mouseout", function (e) {
    play.pause();
  });
}



// To  enable responsive functionality in Github Calendar
GitHubCalendar(".calendar", "Ejajkhan613", { responsive: true });



// Smooth drop
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth"})
  })
})