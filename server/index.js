// ---Imports--- //
const express = require('express')
const cors = require('cors')
const server = express()
const db = require('./util/database')
const {User, Product, Cart} = require('./util/models')


// ---Middleware--- //
server.use(express.json())
server.use(cors())


// ---Associations--- //
User.hasMany(Cart)
Cart.belongsTo(User)

Product.hasMany(Cart)
Cart.belongsTo(Product)

// ---Endpoints--- //



db.sync()
// ---Listen--- //
server.listen(4000, () => console.log('Server runs on 4000'))