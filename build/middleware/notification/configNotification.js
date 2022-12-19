"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurationNotification = void 0;
const optionNotification_1 = require("../../enum/optionNotification");
function configurationNotification(title, body, orientation, imageUrl) {
    let config = {};
    const notification = {
        title,
        body,
        imageUrl,
    };
    if (imageUrl === '') {
        if (optionNotification_1.EOrientation[orientation] === optionNotification_1.EOrientation[0]) {
            config = {
                webpush: { notification },
            };
        }
        else if (optionNotification_1.EOrientation[orientation] === optionNotification_1.EOrientation[1]) {
            config = {
                android: { notification },
            };
        }
        else if (optionNotification_1.EOrientation[orientation] === optionNotification_1.EOrientation[2]) {
            config: {
                apns: {
                    payload: notification;
                }
            }
        }
        else {
            config = { notification };
        }
    }
    else {
        if (optionNotification_1.EOrientation[orientation] === optionNotification_1.EOrientation[0]) {
            config = {
                webpush: { notification: { title, body } },
            };
        }
        else if (optionNotification_1.EOrientation[orientation] === optionNotification_1.EOrientation[1]) {
            config = {
                android: { notification: { title, body } },
            };
        }
        else if (optionNotification_1.EOrientation[orientation] === optionNotification_1.EOrientation[2]) {
            config = {
                apns: { payload: { title, body } },
            };
        }
        else {
            config = {
                notification: { notification: { title, body } },
            };
        }
    }
    return config;
}
exports.configurationNotification = configurationNotification;
