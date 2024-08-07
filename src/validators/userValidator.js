const joi  = require('joi');


// create a user defined function to validate the user
const validateCreateUser = (data)=>{
    const schema = joi.object({
        email : joi.string().email().required(),
        name : joi.string().required(),
        age : joi.number().required(),
        city : joi.string().required(),
        zipcode : joi.number().required()
    }); 

    return schema.validate(data);
};

// for validateupdateuser
const validateUpdateUser = (data)=>{
    const schema = joi.object({
        email : joi.string().email().optional(),
        name : joi.string().optional(),
        age : joi.number().optional(),
        city : joi.string().optional(),
        zipcode : joi.number().optional()
    });

    return schema.validate(data);
}


module.exports = {
    validateCreateUser,
    validateUpdateUser
};
