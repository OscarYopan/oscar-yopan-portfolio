// Infinite loop
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

function getApiGitHub() {
  fetch('https://api.github.com/users/OscarYopan/starred').then(async res => {
    if (!res.ok) {
      throw new Error(res.status)
    }

    var data = await res.json()

    data.map(item => {
      const portifolioContainer = document.querySelector('.swiper-wrapper')
      const project = document.createElement('div')
      project.classList.add('swiper-slide')

      project.innerHTML = `
          <iframe src="${item.homepage}" frameborder="0"></iframe>
          <div class="shade">
            <div class="icons">
              <h5 class="project-title">${item.name.toUpperCase()}</h5>
              <p class="project-description">${item.description}</p>
              <div class="icon">
                <a href="${
                  item.homepage
                }" target="_blank"><i class="fa-solid fa-desktop"></i></a>
                <a href="${
                  item.html_url
                }" target="_blank"><i class="fa-brands fa-github"></i></a>
              </div>
            </div>
          </div>
        `

      portifolioContainer.appendChild(project)
    })
  })
  // .catch(e => console.log(e))
}

getApiGitHub()
