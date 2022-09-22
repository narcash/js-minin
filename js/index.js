//56 ES6
// for (let i = 0; i < 5; i++) {
//    setTimeout(function() {
//     console.log(i);
//    }, 2000)
// }

// const HEX = '#FFAABB'

// const arr = [1, 2]
// const obj = {a: 1}

// arr.unshift(3)
// obj.b = 2
// console.log(arr);
// console.log(obj);

// document.querySelector('h1').style.color = HEX

// 57 Стрелочные функции

// function getAge(year) {
//     const current = new Date().getFullYear()
//     return current - year
// }
// console.log(getAge(1990));

// const calculateAge = (year) => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// console.log(calculateAge(1998));


// const getAge = year => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// const getAge = year => new Date().getFullYear() - year
// const logAge = year => console.log(new Date().getFullYear() - year);
// logAge(1998)
// console.log(getAge(2000))

// const person = {
//     age: 26,
//     firstName: "Nar",
//     logNameWithTimeOut() {
//         setTimeout(() => {
//             console.log(this.firstName);
//         }, 1000)
//     }
// } 

// 58 
// const createPost = (title, text = 'Default Txt', date = new Date().toLocaleDateString()) => {
//     return {
//         title,
//         text, 
//         date
//     }
// }

// const post = createPost('New Year');
// console.log(post);

// 59 OBJ

// const createCar = (name, model) => ({name, model})

// const ford = createCar('Ford', 'Focus')
// console.log(ford);

// const yearField = 'year'

// const BMW = {
//     name: "BMW",
//     ['model']: "X6",
//     [yearField]: 2020,

//     logFields() {
//         const {name, model, year} = this
//         console.log(name, model, year);
//     }
// }
// console.log(BMW);
// BMW.logFields()
// const year = BMW.year

// // const {year} = BMW
// console.log(year);

// 60 rest spread

// const form = document.querySelector('form')

// form.addEventListener('submit', event => {
//     event.preventDefault()

//     const title = form.title.value
//     const text = form.text.value
//     const desc = form.desc.value

//     saveForm({title, text, desc})
// })

// Spread
// function saveForm(data) {
//     const formData = {
//         date: new Date().toLocaleString(),
//         ...data
//     }

//     console.log('Form data: ', formData);
// }

// rest
// function saveForm(...args) {
    
//     const [title, text, desc] = args

//     const formData = {
//         date: new Date().toLocaleString(),
//         title, text, desc
//     }

//     console.log('Form data: ', formData);
// }

// 61 Строки

// const creatLink = ({path, name}) => `<a target="_blank" href="${path}">${name}</a>`

// const ul = document.querySelector('ul')
// const google = `<li>${reatLink({path: 'https://google.com', name: 'Google'})}</li>`
// const ya = `<li>${creatLink({path: 'https://ya.ru', name: 'Ya'})}</li>`

// ul.insertAdjacentElement('afterbegin',google )
// ul.insertAdjacentElement('afterbegin',ya )
// const createLink = ({path, name}) => `<a target="_blank" href="${path}">${name}</a>`

// const ul = document.querySelector('ul')

// const google = `<li>${createLink({path: 'https://google.com', name: 'Google'})}</li>`

// const ya = `<li>${createLink({path: 'https://ya.ru', name: 'Ya'})}</li>`

// ul.insertAdjacentHTML('afterbegin', google)
// ul.insertAdjacentHTML('afterbegin', ya)

// const strToLog = `
//   Hello 
//   World
//     I am 
//       New tab
// `

// console.log(strToLog)

// const strLog = `
//     hello
//         world
//             I am 
//              a new tab
// `

// console.log(strLog);

// 62 Классы и наследование
// RootElement <= Box <= instances

// class RootElement {
//   constructor(tagName = 'div') {
//     this.el = document.createElement(tagName)
//     this.el.style.marginBottom = '20px'
//   }

//   hide() {
//     this.el.style.display = 'none'
//   }
//   show() {
//     this.el.style.display = 'block'
//   }
//   append() {
//     document.querySelector('.wrapper').insertAdjacentElement('afterbegin', this.el)
//   }
// }

// class Box extends RootElement {
//   constructor(color, size = 150, tagName) {
//     super(tagName)
//     this.color = color;
//     this.size = size;
    
//   }
//   create() {
//     this.el.style.background = this.color
//     this.el.style.width = this.el.style.height = `${this.size}px`

//     this.append()
//   }
// }

// class Circle extends RootElement {
//   constructor(color) {
//     super()

//     this.color = color
//   }
//   create() {
//     this.el.style.borderRadius = '50%'
//     this.el.style.width = this.el.style.height = `120px`
//     this.el.style.background = this.color
//     this.append()
//   }
  
// }
// const redBox = new Box('red', 100, 'div').create();
// const blueBox = new Box('blue').create();
// const yellowBox = new Box('yellow').create();
// const circle = new Circle('blue').create();

// redBox.el.addEventListener('click', () => {
//   redBox.hide()
// })
/* Реализуйте класс Dropdown, который будет инициализировать компонент выбора элементов по функционалу похожий на обычный HTML элемент select, но полностью реализованный вашим кодом без select тега.

Пример использования:
const dropdown = new Dropdown('dropdown', {
  items: [
    {label: 'Москва', id: 'msk'},
    {label: 'Санкт-Петербург', id: 'spb'},
    {label: 'Новосибирск', id: 'nsk'},
    {label: 'Краснодар', id: 'krdr'}
  */

    // setTimeout(() => {
    //   alert('Hello, world!')
    // }, 2000);

     let counter = 0;

    let interval = setInterval(() => {
      console.log(++counter);
    }, 1000 * 2)

    setTimeout(() => {
      clearInterval(interval)
    }, 5000)

    