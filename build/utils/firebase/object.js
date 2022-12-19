"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listItem = exports.oneItem = exports.exist = exports.iterableObject = void 0;
/**
 * @param object  objetos no iterables
 *
 * @returns object  objeto iterable
 */
function iterableObject(item) {
    return JSON.parse(JSON.stringify(item));
}
exports.iterableObject = iterableObject;
/**
 * @param snap serie de documentos iterables
 *
 * @returns boolean retorna verdadero si existe caso contrario retorna falso
 */
function exist(snap) {
    let respuestas = false;
    snap.forEach(data => {
        respuestas = data.exists;
    });
    return respuestas;
}
exports.exist = exist;
/**
 * @param snap serie de documentos de firebase
 *
 * @returns object (no iterable)
 */
function oneItem(snap) {
    let respuestas;
    snap.forEach(item => {
        respuestas = Object.assign(Object.assign({}, item.data()), { id: item.id });
    });
    return respuestas;
}
exports.oneItem = oneItem;
/**
 * @param snap serie de documentos de firebase
 *
 * @returns array
 */
function listItem(snap) {
    let respuestas = [];
    snap.forEach(item => {
        respuestas.push(item.data());
    });
    return respuestas;
}
exports.listItem = listItem;
