const express = require("express");
const Router = express.Router();
const studentController = require("../controllers/studentControllers");
const {
    createValidator,
    updateValidator,
    validate,
} = require("../validations/studentvalidator");

// List all students
Router.get("/index", studentController.index);

// Show student by ID
Router.get("/index/:id", studentController.show);

// Create new student with validation
Router.post("/store", (req, res, next) => {
    const result = validate(createValidator, req.body);

    if (!result.success) {
        return res.status(400).json({ status: "error", errors: result.errors });
    }

    studentController.store(req, res, next);
});

// Update student by ID (optional, uncomment if needed)
// Router.put("/update/:id", (req, res, next) => {
//     const result = validate(updateValidator, req.body);

//     if (!result.success) {
//         return res.status(400).json({ status: "error", errors: result.errors });
//     }

//     studentController.update(req, res, next);
// });

// Delete student by ID
Router.delete("/delete/:id", studentController.delete);

module.exports = Router;