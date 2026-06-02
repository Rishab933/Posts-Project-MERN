const mongoose = require('mongoose')
const dns = require('dns')

dns.setServers(['8.8.8.8','1.1.1.1'])

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONG0_URI)
        console.log('connected to db')
    }catch(err){
        console.log('connection to db failed: ', err.message)
        process.exit(1)
    }
}

module.exports = connectDB