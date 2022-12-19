"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const auth_1 = require("./routers/auth");
const notification_1 = require("./routers/notification");
const errorHandle_1 = require("./middleware/errorHandle");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
// ROUTER
app.use(auth_1.authRouter);
app.use(notification_1.notificationRouter);
const swaggerJsDocs = yamljs_1.default.load('./docs/doc.yaml');
app.use('/api/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerJsDocs));
app.use(errorHandle_1.handleError);
