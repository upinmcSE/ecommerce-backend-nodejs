
const mongoose = require('mongoose')

const connectString = `mongodb://localhost:27017/shopApp`

mongoose.connect(connectString).then( _=> console.log(`connected success`))
.catch( err => console.log(`error connect`))


module.exports = mongoose