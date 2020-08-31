// Object

/*  const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Linkoping',
        temp: 22
    }
};

const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}.`)

const { temp: temperature, city } = person.location;
if (city && temperature) {
console.log(`Its ${temperature} in ${city}`)
} 

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-published' } = book.publisher;

console.log(publisherName) */



//Array

/* const adress = ['1299 S Juniper Street', 'Phily', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = adress;
console.log(`You are in ${city} ${state}`) */

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75' ];

const [product, ,price] = item;

console.log(`A medium ${product} costs ${price}`)