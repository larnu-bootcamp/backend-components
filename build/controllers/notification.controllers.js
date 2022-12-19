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
exports.unsubscribeNotification = exports.subscribeNotification = exports.deleteNotifications = exports.updateNotifications = exports.createNotifications = exports.getNotifications = void 0;
const __1 = require("..");
const errorHandle_1 = require("../middleware/errorHandle");
const object_1 = require("../utils/firebase/object");
const optionNotification_1 = require("../enum/optionNotification");
function getNotifications(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const notificationRef = __1.db
                .collection('user')
                .doc(`${req.headers['name']}`)
                .collection('notification');
            const listNotification = yield notificationRef.get().then(object_1.listItem);
            if (!listNotification)
                return next(new errorHandle_1.createError(202, 'no hay notificación'));
            return res.status(200).send({ data: { listNotification } });
        }
        catch (error) {
            return next(new errorHandle_1.createError());
        }
    });
}
exports.getNotifications = getNotifications;
function createNotifications(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let { title, body, img, orientation, state, time } = req.body;
            if (!title)
                return next(new errorHandle_1.createError(404, 'el campo title es obligatorio'));
            if (!body)
                return next(new errorHandle_1.createError(404, 'el campo body es obligatorio'));
            if (!img)
                img = '';
            const dataNotification = {
                title,
                body,
                img,
                orientation: optionNotification_1.EOrientation[orientation || 'none'],
                state: optionNotification_1.EState[state || 'complete'],
                time: time || new Date(),
            };
            const notificationRef = __1.db
                .collection('user')
                .doc(`${req.headers['name']}`)
                .collection('notification')
                .doc();
            yield notificationRef.set(dataNotification);
            res.status(200).json('notificación creada correctamente');
        }
        catch (error) {
            console.log(error);
            return next(new errorHandle_1.createError());
        }
    });
}
exports.createNotifications = createNotifications;
function updateNotifications(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const notificationRef = __1.db
                .collection('user')
                .doc(`${req.headers['name']}`)
                .collection('notification');
            const notificationExist = notificationRef
                .where('id', '==', req.params.id)
                .get()
                .then(object_1.exist);
            if (!notificationExist)
                return next(new errorHandle_1.createError(404, 'notificación no  existe'));
            yield notificationRef.doc(req.params.id).update(Object.assign({}, req.body));
            return res.status(200).json('notificación modificada');
        }
        catch (error) {
            return next(new errorHandle_1.createError());
        }
    });
}
exports.updateNotifications = updateNotifications;
function deleteNotifications(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const notificationRef = __1.db
                .collection('user')
                .doc(`${req.headers['name']}`)
                .collection('notification');
            const notificationExist = notificationRef
                .where('id', '==', req.params.id)
                .get()
                .then(object_1.exist);
            if (!notificationExist)
                return next(new errorHandle_1.createError(404, 'notificación no  existe'));
            yield notificationRef.doc(req.params.id).delete();
            return res.status(404).send({ message: 'user deleted' });
        }
        catch (err) {
            next(new errorHandle_1.createError(0, err.message));
        }
    });
}
exports.deleteNotifications = deleteNotifications;
function subscribeNotification(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { topic } = req.body;
            const token = req.header['name'];
            if (!topic) {
                return next(new errorHandle_1.createError(404, 'ingrese el tema al cual quiere subscribirse'));
            }
            if (!token) {
                return next(new errorHandle_1.createError(404, 'no tiene permisos para inscribirse'));
            }
            __1.dbMessage.subscribeToTopic(token, topic);
            return res.status(400).json('subscripción exitosa');
        }
        catch (err) {
            next(new errorHandle_1.createError(0, err.message));
        }
    });
}
exports.subscribeNotification = subscribeNotification;
function unsubscribeNotification(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { topic } = req.body;
            const token = req.header['name'];
            if (!topic) {
                return next(new errorHandle_1.createError(404, 'ingrese el tema al cual quiere subscribirse'));
            }
            if (!token) {
                return next(new errorHandle_1.createError(404, 'no tiene permisos para inscribirse'));
            }
            __1.dbMessage.unsubscribeFromTopic(token, topic);
            return res.status(400).json('subscripción cancelada');
        }
        catch (err) {
            next(new errorHandle_1.createError(0, err.message));
        }
    });
}
exports.unsubscribeNotification = unsubscribeNotification;
