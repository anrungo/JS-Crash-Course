// console.log('Hello World');
// console.error('This is an error')
// console.warn('This is a warning')

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 34,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

// Object destructuring 

const { firstName, lastName, address: { city }} = person;

// console.log(firstName)
// console.log(city)


const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];


// High Order Array methods:

// forEach, map, filter
todos.forEach(function(todo) {
    // console.log(todo.text)
})

const todoText = todos.map(function(todo) {
    return todo.text
})

// console.log(todoText);

const todoFilter = todos.filter(function(todo) {
    return todo.isCompleted === true
}).map(function(todo) {
    return todo.text
})


// console.log(todoFilter);


// Constructor functions    
/* function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
} */

//Class

class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
    return this.dob.getFullYear();
    }

    getFullName(){
    return `${this.firstName} ${this.lastName}`
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980')
const person2 = new Person('Mary', 'Smith', '3-6-1970')

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person2);


// Single element 
// const form = document.getElementById('my-form')
// const form2 = document.querySelector('.container')

// Multiple element

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// ul.remove()
// ul.lastElementChild.remove()
/* ul.firstElementChild.textContent = 'Hello'
ul.children[1].innerText = 'Rungo'
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'


const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Events

btn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>'
}) */

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields!';

        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li);

        // Clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}












