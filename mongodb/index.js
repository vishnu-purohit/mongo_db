const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://purohitvishnu125_db_user:vishnu111@vishnu.celttxp.mongodb.net/?retryWrites=true&w=majority&appName=vishnu"),({
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const studentSchema=new mongoose.Schema({
    title:String,
    artist:String,
    category:String,
    album:String,
    url:String,
    photo:String,
    year:Number,
});

const Student=mongoose.model("Student",studentSchema);
console.log("MongoDB connected successfully");

// const student= new Student({
//     title: 'Shape of You',
//       artist: 'Ed Sheeran',
//       category: 'Pop',
//       album: 'Divide',
//       url: 'https://example.com/shape-of-you',
//       photo: 'https://example.com/images/shape-of-you.jpg',
//       year: 2017

// });

// student.save().then(()=>{
//     console.log("saved data")
// })
// .catch((error)=>{
//     console.log("error fetch",error)
// })

// select or fetch data
// Student.find({name:"parth solanki"}).then((result)=>{
//     console.log("all record : ",result)
// })

// .catch((error)=>{
//     console.log("error fetch",error)
// })