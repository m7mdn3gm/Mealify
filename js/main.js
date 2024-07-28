// ====== Show Nav Bar ======
const showIcon = document.querySelector(".fa-bars");
const ulList = document.querySelector("nav ul");
showIcon.addEventListener("click", () => {
  ulList.classList.toggle("show");
});

// ====== Arrow Back Up ======
const backUp = document.querySelector(".back-up");
window.addEventListener("scroll", () => {
  if (scrollY >= 250) {
    backUp.style.right = "15px";
  } else {
    backUp.style.right = "-40px";
  }
});
backUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ====== Dark Mode ======
const toggleDark = document.getElementById("toggleDark");
const toggleLight = document.getElementById("toggleLight");
toggleDark.addEventListener("click", () => {
  toggleDark.style.display = "none";
  toggleLight.style.display = "block";
  document.querySelector(".header nav").style.background = "#18181a";
  document.querySelector(".header nav .logo").style.color = "#fff";
  document.querySelector(".header").style.background = "#252525";
  document.querySelector(".header .content-header .left h2").style.color = "#fff";
  document.querySelector(".header .content-header .left .btn .icon a").style.color = "#fff";
  document.querySelector(".header .content-header .left .btn .icon i").style.color = "#fff";
  document.querySelector(".proffesional").style.background = "#202020";
  document.querySelectorAll(".proffesional .boxs .box").forEach((eo) => {eo.style.background = "#18181a";});
  document.querySelectorAll(".proffesional .boxs .box h2").forEach((eo) => {eo.style.color = "#fff";});
  document.querySelectorAll(".main-heading p").forEach((eo) => {eo.style.color = "#fff";});
  document.querySelector(".gallery").style.background = "#252525";
  document.querySelector(".contact").style.background = "#202020";
  document.querySelectorAll(".contact .boxs-contact .box-contact").forEach((eo) => {eo.style.background = "#18181a";});
  document.querySelector(".contact .forms").style.background = "#18181a";
  document.querySelector("section").style.background = "#202020";
  document.querySelector(".header nav .dark .fa-bars").style.color = "#fff";
  document.querySelector(".header nav ul").style.background = "#18181a";
});

toggleLight.addEventListener("click", () => {
    location.reload();
});

// ====== Change Nav-Bar Links In Scroll ======
const links = document.querySelectorAll("nav ul li a");
const linkHome = document.getElementById("linkHome");
const linkChefs = document.getElementById("linkChefs");
const linkGallery = document.getElementById("linkGallery");
const linkContact = document.getElementById("linkContact");
window.addEventListener("scroll", () => {
    if (scrollY >= -5 && scrollY <= 550) {
        links.forEach((allLink) => {
          linkHome.classList.add("active");
          allLink.classList.remove("active");
        });
      } else if (scrollY >= 550 && scrollY <= 1500) {
        links.forEach((allLink) => {
          linkChefs.classList.add("active");
          allLink.classList.remove("active");
        });
      } else if (scrollY >= 1500 && scrollY <= 2600) {
        links.forEach((allLink) => {
          linkGallery.classList.add("active");
          allLink.classList.remove("active");
        });
      } else if (scrollY >= 2600 ) {
        links.forEach((allLink) => {
          allLink.classList.remove("active");
          linkContact.classList.add("active");
          console.log("hello");
        });
      } 
});