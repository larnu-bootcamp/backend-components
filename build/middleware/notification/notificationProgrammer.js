"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRecurrent = exports.sendProgrammer = exports.sendNow = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const sendNotification_1 = require("./sendNotification");
const configNotification_1 = require("./configNotification");
function sendNow(time, title, body, orientation, img) {
    const message = (0, configNotification_1.configurationNotification)(title, body, orientation, img);
    (0, sendNotification_1.sendMessage)(message);
}
exports.sendNow = sendNow;
function sendProgrammer(time, title, body, orientation, img) {
    const message = (0, configNotification_1.configurationNotification)(title, body, orientation, img);
    const dayMonth = time.getDate() || '*';
    const dayWeek = time.getDate() || '*';
    const minute = time.getSeconds() || '*';
    const month = time.getMonth() || '*';
    const hour = time.getHours() || '*';
    node_cron_1.default.schedule(`${minute} ${hour} ${dayMonth} ${month} ${dayWeek}`, () => {
        (0, sendNotification_1.sendMessage)(message);
    });
}
exports.sendProgrammer = sendProgrammer;
function sendRecurrent(time, dayWeek, title, body, orientation, img) {
    const message = (0, configNotification_1.configurationNotification)(title, body, orientation, img);
    const dayMonth = time.getDate() || '*';
    const minute = time.getSeconds() || '*';
    const month = time.getMonth() || '*';
    const hour = time.getHours() || '*';
    node_cron_1.default.schedule(`${minute} ${hour} ${dayMonth} ${month} ${dayWeek}`, () => {
        (0, sendNotification_1.sendMessage)(message);
    });
}
exports.sendRecurrent = sendRecurrent;
