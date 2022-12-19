"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EState = exports.EOrientation = void 0;
var EOrientation;
(function (EOrientation) {
    EOrientation[EOrientation["none"] = 0] = "none";
    EOrientation[EOrientation["android"] = 1] = "android";
    EOrientation[EOrientation["IOS"] = 2] = "IOS";
    EOrientation[EOrientation["androidAndIos"] = 3] = "androidAndIos";
})(EOrientation = exports.EOrientation || (exports.EOrientation = {}));
var EState;
(function (EState) {
    EState[EState["complete"] = 0] = "complete";
    EState[EState["recurrent"] = 1] = "recurrent";
    EState[EState["programmed"] = 2] = "programmed";
})(EState = exports.EState || (exports.EState = {}));
