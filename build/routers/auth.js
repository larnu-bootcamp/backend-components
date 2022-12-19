"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controllers_1 = require("../controllers/auth.controllers");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.post('/auth/register', auth_controllers_1.register);
authRouter.post('/auth/login', auth_controllers_1.login);
