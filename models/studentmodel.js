const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title:String,
    artist:String,
    category:String,
    album:String,
    url:String,
    photo:String,
    year:Number,
});

const song=mongoose.model('Song',songSchema);

module.exports=song;