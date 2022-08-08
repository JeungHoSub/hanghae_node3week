const authService = require('../services/auth.service');
const Joi = require("joi");


require("mysql2");

/**
 * 회원가입 API
 * @param {Request} req 
 * @param {Response} res 
 * @param {*} next 
 * @returns 
 */
const join = async (req, res, next) => {

    try {

        const userDto = await Joi.object({
            nickname: Joi.string().min(2).max(15).required(),
            password: Joi.string().min(4).max(20).required(),
            confirm: Joi.string().min(4).max(20).required()
        }).validateAsync( {...req.body} );

        return authService.join(userDto, res);
        
    } catch (err) {
        return res.json(err.message);
    }


};

const login = async (req, res, next) => {

    const authDto = await Joi.object({
        nickname: Joi.toString().min(2).max(15).required(),
        password: Joi.toString().min(4).max(20).required(),
    }).validateAsync({ ...req.body });

    return;
};


module.exports = {
    join,
    login
}