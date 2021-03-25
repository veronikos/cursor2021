// const getPassword = localStorage.getItem('password');

// if(getPassword === null) {

//     window.location.href = 'index.html'

// }

//написать кнопку логАут которая будет очищать локал сторедж


// Работа с сервером

// request = запрос к серверу клиента. 
// response = ответ с сервера

// proxy server

// https://url
// {
    //request body
    // s stands for sertified secure site
// }

// XMLHttpRequest

// fetch ('url')
//     .then((response) => {
//         // распарсиваем
//         return response.json()
//     })
//     // а тут мы уже можем работать с датой
//     .then((data) => console.log(data))


// получили обьекты всех персонажей
// fetch('https://swapi.dev/api/people/')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })

// // перебрать по именам: и можно по чему угодно. работа с массивами.

// fetch('https://swapi.dev/api/people/')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//         const people = data.results;
//         people.map((p, i) => console.log(p.name))
//     })

// axios - никто не использует фетч в чистом виде.
// axios.get('https://swapi.dev/api/people/')
//     .then((res) => console.log(res.data))

axios.get('https://swapi.dev/api/people/')
    .then((res) => {
        console.log(res.data)
        const people = res.data.results;
        people.map((p, i) => console.log(p.name))
    })

// REST api

// CRUD

// create(post) read(get) update(put, update) delete(delete)

axios.get('https://swapi.dev/api/people/1/')
    .then((res) => {
        console.log(res.data)
    })
    // info about 1 people from data

axios.get('https://swapi.dev/api/starships/')
    .then((res) => {
        console.log(res.data)
        toView(res.data.results)
    })

function toView(data) {

}
// Errors
// 2.. - success status - все успешные запросы.
// 3.. - редрекшны
// 4.. - клиентские ошибки. client error - значит мы с вами неправильно обращаемся к серверу.
// 5.. - server error (ошибки сервера)

// CORS Cross origin request status - браузер не разреает без резрешения сервера делать запрос по апи, 
// если не тот айпи-адрес. * даст возможность всем айпи получить данные
// в самом запросе нельзя поставить проходку мимо корса. баузер нельзя так обмануть! 
// корсы настраиваются только на сервере.

axios.get('https://product-api.rozetka.com.ua/v4/goods/get-guarantee?front-type=xl&categoryId=105280&goodsId=18522112&lang=ru')
    .then((res) => {
        console.log(res.data)
    })