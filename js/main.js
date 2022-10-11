/* Menu Hamburguesa */

function hamburgerMenu(hamburger_btn, nav_home, nav_home_link) {
  const d = document;

  d.addEventListener("click", (e) => {
      if (e.target.matches(hamburger_btn) || e.target.matches(`${hamburger_btn} *`)) {
          d.querySelector(nav_home).classList.toggle("nav_home-active");
          d.querySelector(hamburger_btn).classList.toggle("is-active");
      } 

      if (e.target.matches(nav_home_link)) {
          d.querySelector(nav_home).classList.remove("nav_home-active");
          d.querySelector(hamburger_btn).classList.remove("is-active");
      }
  });
}

hamburgerMenu(".hamburger_btn", ".nav_home", ".nav_home-link a");

/* Subrrayado de las secciones */

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('home-link-active');
    console.log(link);
  }
})