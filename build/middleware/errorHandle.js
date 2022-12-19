"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createError = exports.handleError = void 0;
const handleError = function (err, req, res, next) {
    const status = err.status || 500;
    const message = err.message;
    return res.status(status).send({ error: { status, message } });
};
exports.handleError = handleError;
class createError extends Error {
    /**
     * @param status request status number
     * @param message error message or err.message
     */
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
exports.createError = createError;
