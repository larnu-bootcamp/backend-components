"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticate = void 0;
const __1 = require("..");
const errorHandle_1 = require("./errorHandle");
function isAuthenticate(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authenticate = req.headers['auth'];
            if (!authenticate)
                return next(new errorHandle_1.createError(403, 'usuario no autenticado'));
            const isAuth = yield __1.dbAuth.verifyIdToken(authenticate);
            if (!isAuth)
                return next(new errorHandle_1.createError(404, 'no esta autorizado'));
        }
        catch (err) {
            next(new errorHandle_1.createError(0, err.message));
        }
    });
}
exports.isAuthenticate = isAuthenticate;
