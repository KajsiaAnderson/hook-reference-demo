// ---Imports--- //
const express = require('express')
const cors = require('cors')
const server = express()


// ---Middleware--- //
server.use(express.json())
server.use(cors())


// ---Endpoints--- //



// ---Listen--- //
server.listen(4000, () => console.log('Server runs on 4000'))