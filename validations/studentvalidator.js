const Joi = require("joi");

exports.createValidator = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    artist: Joi.string().min(3).max(100).required(),
    category: Joi.string().min(3).max(50).required(),
    album: Joi.string().min(1).max(100).required(),
    url: Joi.string().uri().required(),
    photo: Joi.string().uri().optional(),
    year: Joi.number().integer().min(1900).max(new Date().getFullYear()).optional(),
});

exports.updateValidator = Joi.object({
    title: Joi.string().min(3).max(100).optional(),
    artist: Joi.string().min(3).max(100).optional(),
    category: Joi.string().min(3).max(50).optional(),
    album: Joi.string().min(1).max(100).optional(),
    url: Joi.string().uri().optional(),
    photo: Joi.string().uri().optional(),
    year: Joi.number().integer().min(1900).max(new Date().getFullYear()).optional(),
});

exports.validate = (Schema, data) => {
    const { error, value } = Schema.validate(data, { abortEarly: false });

    if (error) {
        return {
            success: false,
            errors: error.details.map((err) => ({
                field: err.path[0],
                message: err.message,
            })),
        };
    }

    return { success: true, value };
};