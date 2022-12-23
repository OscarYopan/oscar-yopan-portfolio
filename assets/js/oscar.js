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

const APIURL = 'https://api.github.com/users/'

// const form = document.querySelector('#form')
// const search = document.querySelector('#search')
// const main = document.querySelector('#main')

async function getUser(username) {
  const { data } = await axios.get(APIURL + username)

  createProject(data)
  getRepos(username)
  console.log(username)
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(APIURL + username + '/repos?sort=created')

    addReposToCard(data)
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('No profile with this username')
    }
  }
}

// function createProject(user) {
//   const cardHTML = `
//   <div class="card">
//       <div class="pohto">
//         <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
//       </div>
//       <div class="user-info">
//         <h2>${user.name}</h2>
//         <p>${user.bio}</p>
//         <ul>
//           <li>${user.followers} <strong>Followers</strong></li>
//           <li>${user.following}  <strong>Following</strong></li>
//           <li>${user.public_repos}  <strong>Repos</strong></li>
//         </ul>
//         <div id="repos"></div>
//       </div>
//     </div>
//   `
//   main.innerHTML = cardHTML
// }

// function createErrorCard(msg) {
//   const cardHTML = `
//     <div class="card">
//       <h1>${msg}</h1>
//     </div>
//   `
//   main.innerHTML = cardHTML
// }

// function addReposToCard(repos) {
//   const reposEl = document.getElementById('repos')
//     repos
//       .slice(0, 5)
//       .forEach(repo => {
//         const repoEl = document.createElement('a')

//         repoEl.classList.add('repo')
//         repoEl.href = repo.html_url
//         repoEl.target = '_blank'
//         repoEl.innerText = repo.name

//         reposEl.appendChild(repoEl)
//       });
// }

window.onload = function OscarYopan() {
  // e.preventDefault()
  // const user = 'OscarYopan'
  // if (user) {
  //   getUser(user)
  // }
  console.log(123)
}
