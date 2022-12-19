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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
function sendMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
        yield firebase_admin_1.default
            .messaging()
            .send(message)
            .then(() => console.log(message))
            .then(() => console.log({ message: 'mensaje enviado correctamente' }))
            .catch(error => {
            console.log(error);
        });
    });
}
exports.sendMessage = sendMessage;
