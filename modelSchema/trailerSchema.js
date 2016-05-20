var mongoose = require('mongoose');

var trailerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}, {collection: 'trailers'});

module.exports = mongoose.model('trailers', trailerSchema);