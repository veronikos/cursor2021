
// const container = {
//   tagName: 'div',
//   classList: ['container'] 
// };

// const title = {
//   tagName: 'h2',
//   id: 'main-title',
//   text: 'Title'
// };

// container.child = title;

// title.parent = container;

// const body = {
//   children: [container]
// };



// const title = document.querySelector('.title');

// console.log('%c 🍢 title: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', title);


// const index = title.querySelector('.index');
// console.log('%c 🥐 index: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', index);


const titles = document.querySelectorAll('h2');


// titles.forEach(item => {
//   item.style.background = 'red';
// })

const titles2 = document.getElementsByClassName('title');


// [...titles2].forEach(item => {
//   item.style.background = 'red';
// })


const input = document.querySelector('.user-input');
const users = document.querySelector('.users');

// input.value = 'Oleg'

const usersList = ['Oleg', 'Oleksii'];

usersList.forEach((user, index) => {
  addUserOld(user, index);
})

function addUserOld(user = input.value, id) {
  users.insertAdjacentHTML('afterbegin', `
    <p class="user" data-id="${id}">${user}</p>
  `)
  input.value = '';
}




function addUser() {
  input.classList.toggle('invalid');
  // if (!input.value) {
  //   input.classList.add('invalid');
  //   return;
  // } else if (input.classList.contains('invalid')) {
  //   console.log('invalid was present');
  //   input.classList.remove('invalid');
  // }

  users.insertAdjacentHTML('afterbegin', `
    <p class="user">${input.value}</p>
  `)
  input.value = '';
}



// const select = document.querySelector('select');
// console.dir(select);
// select.value
// console.log('%c 🍏 select.value: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', select.value);
// console.log('%c 🍪 select: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', select);




const title = document.querySelector('.title');


function changeFontSize(increase) {
  let currentSize = parseInt(getComputedStyle(title).fontSize);


  increase ? currentSize++ : currentSize--;
  title.style.fontSize = currentSize + 'px';
}



const usersElement = document.querySelector('.users');

// usersElement.remove();

// document.body.replaceWith(usersElement);


const h1 = document.createElement('h1');

h1.innerHTML = '<i>hello</i>';

document.body.append(h1);


const h2 = `<h1><i>hello</i></h1>`;
document.body.insertAdjacentHTML('beforeend', h2);