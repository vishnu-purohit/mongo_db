const Song = require('../models/studentmodel');

exports.index = (req, res) => {
    Song.find()
    .then((allSongs)=>{
        console.log("All Songs:", allSongs);
        res.send({mesasage:"All Songs",data:allSongs})
})
    .catch((err)=>{
        console.error("Error fetching songs:", err);
    });
};

exports.show = (req, res) => {
    Song.findById(req.params.id)
    .then((song)=>{
        console.log("all Song:", song);
        res.send({mesasage:"all Song",data:song})
    })
    .catch((err)=>{
        console.error("Error fetching song:", err);
    });
};

exports.store = (req, res) => {
    const newSong = new Song({
        title: req.body.title,
        artist: req.body.artist,
        category: req.body.category,
        album: req.body.album,
        url: req.body.url,
        photo: req.body.photo,
        year: req.body.year,
    });
    newSong
    .save()
    .then((savedSong)=>{
        console.log("Song saved:", savedSong);
        res.send({message:"Song saved",data:savedSong})
    })
    .catch((err)=>{
        console.error("Error saving song:", err);
    });
};

exports.update = (req, res) => {
    Song.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedSong) => {
        console.log("Updated Song:", updatedSong);
        res.send({ message: "Updated Song", data: updatedSong });
    })
    .catch((err) => {
        console.error("Error updating song:", err);
    });
};

exports.delete = (req, res) => {
    Song.findByIdAndDelete(req.params.id)
    .then(()=>{
        console.log("Deleted Song:", deletedSong);
        res.send({message:"Deleted Song",data:deletedSong})
    })
    .catch((err)=>{
        console.error("Error deleting song:", err);
    });
};

