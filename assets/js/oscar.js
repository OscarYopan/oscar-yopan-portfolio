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
// const scrollReveal = ScrollReveal({
//   origin: 'top',
//   distance: '30px',
//   duration: 700,
//   reset: true
// })

// scrollReveal.reveal(
//   `#home .fa-brands, #home .title, #home .subtitle, #home .presentation. #home .button,
//   #about .title, #about .subtitle, #about .oscar-photo, #about .presentation, #about .button
//   #services header, #services .card,
//   #testimonials header, #testimonials .testimonials
//   #contact .text, #contact .links,
//   footer .brand, footer .social
//   `,
//   { interval: 100 }
// )

// window.addEventListener('scroll', function () {
//   changeHeaderWhenScroll()
//   backToTop()
// })

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

// fetch('https://api.github.com/users/OscarYopan/repos')
//   .then(res => res.json())
//   // .then(data => setRepo(data))
//   .then(data => console.log(data))

// function setRepo(data) {
//   console.log(data)
//   for (var i = 0; i < 3; i++) {
//     console.log('Teste')
//     createPortifolio(data[i])
//   }
// }

// teste()

function teste() {
  for (var i = 0; i < 3; i++) {
    console.log('Teste')
    createPortifolio()
  }
}

function createPortifolio() {
  const portifolioContainer = document.querySelector('.portifolio-container')
  const project = document.createElement('div')
  project.classList.add('project')

  project.innerHTML = `
    <div class="shade">
      <div class="icons">
        <h5 class="project-title">Project Name</h5>
        <p class="project-description">Esse é uma projeto base e fake, feito para criar o desgin da minha pagina de portifolio.</p>
        <div class="icon">
          <i class="fa-solid fa-desktop"></i>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  `

  portifolioContainer.appendChild(project)
}
