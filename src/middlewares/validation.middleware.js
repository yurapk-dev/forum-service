import Joi from 'joi';

const schemas = {
    addPost: Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        tags: Joi.array().items(Joi.string())
    }),
    addComment: Joi.object({
        message: Joi.string().required()
    }),
    updatePost: Joi.object({
        title: Joi.string(),
        content: Joi.string(),
        tags: Joi.array().items(Joi.string())
    }).min(1),
    dateFormatPeriod: Joi.object({
        dateFrom: Joi.date().iso().required(),
        dateTo: Joi.date().iso().required().greater(Joi.ref('dateFrom'))
    }),
    // ============ Validation for userAccount: ====================
    registerUser: Joi.object({
        login: Joi.string().required(),
        password: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required()
    }).required(), // агент рекомендует добавить required к объекту !!!?
    updateUser: Joi.object({
        firstName: Joi.string(),
        lastName: Joi.string(),
    }).min(1),
    addRole: Joi.object({
        user: Joi.string().required(),
        role: Joi.string().required()
    }),
    deleteRole: Joi.object({
        user: Joi.string().required(),
        role: Joi.string().required()
    }),
    getUser: Joi.object({
        user: Joi.string().required()
    }),
    deleteUser: Joi.object({
        user: Joi.string().required()
    })

};
const validate = (schemaName, target = 'body') => (req, res, next) => {
    const schema = schemas[schemaName];
    if (!schema) {
        return next(new Error('Invalid schema name'));
    }
    const {error} = schema.validate(req[target]);
    if (error) {
        return res.status(400).json({
            error: error.details[0].message,
            code: 400,
            status: 'Bad request',
            timestamp: new Date().toISOString(),
            path: req.path
        });
    }
    next();
};
export default validate;