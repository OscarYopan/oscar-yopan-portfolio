// Nav Animations
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

//Section Height Defination
function sectionHeight() {
  let height = window.height

  console.log(height)
}
