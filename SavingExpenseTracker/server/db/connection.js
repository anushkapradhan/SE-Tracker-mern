const mongoose = require('mongoose');

const conn = mongoose.connect(process.env.MONGODB)
        .then(db => {
            console.log("Database Connected");
            return db;
        }).catch(err => {
            console.log("Connection Error");
        })

module.exports = conn;