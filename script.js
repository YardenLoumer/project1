// import Person from './Person/script.js'

// //const Person = require('./Person.js')

// const person1 = new Person('Luba', 'Loumer')
// const person2 = new Person('kolyan', 'jjj')
// console.log(person1, person2)
function getSum(...args){
    return args.reduce((a,b)=> a+b)
}
function getMax(...args){
    return Math.max(...args)
}

export default getSum
export {
    getSum,
    getMax
}