const ApiError = require("../utils/ApiError");

const NotFoundError=(err, req, res, next) => {

    const error_obj= {
        code:500,
        msg:err.message,
        stack:err.stack
    }

    if (err instanceof ApiError) {
        error_obj.code = err.statusCode || 500;
        error_obj.msg = err.message || 'Internal Server Error';
        
    }


    res.status(error_obj.code).send(error_obj);
}

module.exports = NotFoundError;