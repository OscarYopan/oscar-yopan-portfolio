// const { default: axios } = require('axios')

// *************************** Nav Animation ***********************
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 100) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

//*********************************** ScrollReveal ******************
const scrollReveal = scrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .fa-brands, #home .title, #home .subtitle, #home .presentation. #home .button,
  #about .title, #about .subtitle, #about .oscar-photo, #about .presentation, #about .button
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

//*************************** Section Height Defination ************
// sectionHeight()

// function sectionHeight() {
//   const height =
//     window.innerHeight ||
//     document.documentElement.clientHeight ||
//     document.body.clientHeight

//   const width =
//     window.innerWidth ||
//     document.documentElement.clientWidth ||
//     document.body.clientWidth

//   console.log(height, width)
// }

//******************************** Portifolio hover *****************
// const projectHover = document.querySelector('.project')

// projectHover.addEventListener('click', () => {
//   const shade = document.querySelector('.shade')
//   shade.classList.toggle('open')
// })

//******************************* Portifolio Github Create ***********

// const APIURL = 'https://api.github.com/users/OscarYopan/repos'

// getRepos()

// function getRepos(repo) {
//   axios
//     .get(APIURL)
//     .then(response => console.log(response))
//     .catch(err => console.log(err))
// }

fetch('https://api.github.com/users/OscarYopan/repos')
  .then(res => res.json())
  // .then(data => setRepo(data))
  .then(data => console.log(data))
