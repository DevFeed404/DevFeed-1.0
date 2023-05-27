export function successResponse(res, msg, statusCode) {
    const data = {
        status: "SUCCESS",
        statusCode: statusCode,
        message: msg
    };
    return res.status(200).json(data);
};

export function successResponseWithData(res, msg, data, statusCode) {
    const resData = {
        status: "SUCCESS",
        statusCode: statusCode,
        message: msg,
        data: data
    };
    return res.status(200).json(resData);
};
export function errorResponse(res, msg, statusCode) {
    const data = {
        status: "ERROR",
        statusCode: statusCode,
        message: msg
    };
    return res.status(500).json(data);
};

export function errorResponseWithError(res, msg, statusCode, error) {
    const data = {
        status: "ERROR",
        statusCode: statusCode,
        message: msg,
        error: error
    };
    return res.status(500).json(data);
};
export function notFoundResponse(res, msg, statusCode) {
    const data = {
        status: "ERROR",
        statusCode: statusCode,
        message: msg
    };
    return res.status(200).json(data);
};