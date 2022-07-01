const { faker } = require('@faker-js/faker');
const pool = require('./db/db.js')

//Q&A table
let questions = [];

for (let x = 0; x < 50; x++) {
    let question = faker.lorem.text();
    let obj = {
        question
    }
    questions.push(obj)
}

const insertQuestionData = (questions) => {
    questions.forEach((question) => {
        const query = `INSERT INTO target_questions (question) VALUES ('${Object.values(question)}');`
        pool.query(query)
    })
}

insertQuestionData(questions)

//Shipping

let dimensions = [];

for (let x = 0; x < 2; x++) {
    let dimension = faker.datatype.number(100);
    let dimensionObj = {
        dimension
    }
    dimensions.push(dimensionObj)
}

const insertDimensionData = (dimensions) => {
    dimensions.forEach((dimension) => {
        const query = `INSERT INTO shipping (dimensions) VALUES ('${Object.values(dimension)}');`
        pool.query(query)
    })
}

insertDimensionData(dimensions)

//label information

let numbers = []

for (let x = 0; x < 50; x++) {
    let number = faker.datatype.number(300);
    let numberObj = {
        number
    }
    numbers.push(numberObj)
}

const insertLabelData = (numbers) => {
    numbers.forEach((number) => {
        const query = `INSERT INTO label (number) VALUES ('${Object.values(number)}');`
        pool.query(query)
    })
}

insertLabelData(numbers)