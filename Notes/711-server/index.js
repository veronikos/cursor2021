// JSON 
// {
//     "name": "Serg", 
//     "password": "1111"
// }

const user = "User"

// localStorage.setItem('user', user)
localStorage.setItem('user', JSON.stringify(user))

const getUser = localStorage.getItem('user');

console.log(getUser);

// setTimeout(function () {
//     localStorage.removeItem('user')
// }, 3000)


// work with objects. parse from JSON from local storage
// const person = {
//     name: 'User',
//     password: 12345
// }

// localStorage.setItem('person', JSON.stringify(person))

// const getPerson = localStorage.getItem('person');

// const dataPerson = JSON.parse(getPerson)

// console.log(getPerson, 'json');

// console.log(dataPerson, 'obj')


// const password = '12345'

// document.getElementById('myForm').addEventListener('submit', signIn);

// function signIn(e) {
//     const input = document.querySelector('input');
//     if (input.value === password) {
//         e.preventDefault() //stop all events 
//         localStorage.setItem('password', JSON.stringify(password))
//         window.location.href = 'about.html'
//     } else {
//         alert('Неверный пароль!!!')
//     }
// }

// const password = '12345'

// const getPassword = localStorage.getItem('password')

//сессионСторедж удаляется по закрытию браузера
//так делают когда на одном компе рабтают люди с разными доступами. в колцентре например
// const getPassword = sessionStorage.getItem('password')

//нам не нужно будет постоянно писать пароль. если пароль уже есть в локал сторадж. 
// я буду сразу попадать на страницу, вместо страницы авторизации

// if (getPassword !== null) {
//     window.location.href = 'about.html'
// }

// document.getElementById('myForm').addEventListener('submit', signIn);

// function signIn(e) {
//     const input = document.querySelector('input');
//     if (input.value === password) {
//         e.preventDefault() //stop all events 
//         localStorage.setItem('password', JSON.stringify(password))
//         window.location.href = 'about.html'
//     } else {
//         alert('Неверный пароль!!!')
//     }
// }