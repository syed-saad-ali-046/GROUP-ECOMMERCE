// server/config/database.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Farhang:Farhang@farhang1.o060rhl.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;
