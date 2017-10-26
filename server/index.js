const express = require('express')
     ,bodyParser = require('body-parser')
     ,cors = require('cors')
// require('dotenv')

const app = express();
app.use(bodyParser.json())
app.use(cors())


const PORT = 3535;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))