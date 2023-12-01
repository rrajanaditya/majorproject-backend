import Joi from "joi";

export const filterDataValidation = (data) => {
    const schema = Joi.object({
        price: Joi.number().required().label("price"),
        service: Joi.number().required().label("service "),
        brand: Joi.number().required().label("brand"),
        design: Joi.number().required().label("design"),
        performance: Joi.number().required().label("price"),
    })
    return schema.validate(data)
}