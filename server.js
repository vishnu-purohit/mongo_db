const express = require("express");
const path = require("path");
const app = express();
const studentRoutes = require("./routes/studentRoute");
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://purohitvishnu125_db_user:vishnu111@vishnu.celttxp.mongodb.net/?retryWrites=true&w=majority&appName=vishnu"),({
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


console.log("MongoDB connected successfully");




app.use(express.json());
app.use("/students", studentRoutes);

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});