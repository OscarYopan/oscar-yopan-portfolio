// Nav Animation
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 100) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

//Section Height Defination
sectionHeight()

function sectionHeight() {
  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight

  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  console.log(height, width)
}

//Portifolio hover
const projectHover = document.querySelector('.project')

projectHover.addEventListener('click', () => {
  const shade = document.querySelector('.shade')
  shade.classList.toggle('open')
})

//Portifolio Github Create
