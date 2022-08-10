const jwt = require("jsonwebtoken");
require('dotenv/config');

const authRepository = require("../layers/repositories/auth.repository");
const pool = require('../../src/db');

module.exports = async (req, res, next) => {
    const { authorization } = req.headers;
    const [ authType, authToken] = (authorization || "").split(" ");

    if (!authToken || authType !== "Bearer") {
        throw new Error("로그인 후 이용 가능한 기능입니다.");
    }

    const poolConnection = await pool.getConnection();

    try {
        const { userid } = jwt.verify(authToken, process.env.JWT_SECRET);
        console.log("userid",userid);
        const isExists = await authRepository.isExists(poolConnection, userid);
        if (!isExists) throw new Error('로그인 후 이용 가능한 기능입니다.');
        
        req.body.userid = +userid;
        next();

    } catch (err) {

        console.log(err);
        return res.status(500).json(`${err.name} : ${err.message}`);

    }


}