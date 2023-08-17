// import all models
const Users = require('./Users')
const Orders = require('./Orders')
const Books = require('./Books')
const BookAuthor = require('./BookAuthor')

//export all objects
module.exports = {
    users: new Users(),
    books: new Books(),
    orders: new Orders(),
    bookauthor: new BookAuthor()
}