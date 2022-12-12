import FirebaseFirestore from 'firebase-admin/firestore';

/**
 * @param object  objetos no iterables
 *
 * @returns object  objeto iterable
 */
export function iterableObject(item: any) {
  return JSON.parse(JSON.stringify(item));
}

/**
 * @param snap serie de documentos iterables
 *
 * @returns boolean retorna verdadero si existe caso contrario retorna falso
 */

export function exist(snap: FirebaseFirestore.QuerySnapshot) {
  let respuestas = false;
  snap.forEach(data => {
    respuestas = data.exists;
  });
  return respuestas;
}

/**
 * @param snap serie de documentos de firebase
 *
 * @returns object (no iterable)
 */

export function oneItem(snap: FirebaseFirestore.QuerySnapshot) {
  let respuestas;
  snap.forEach(item => {
    respuestas = { ...item.data(), id: item.id };
  });
  return respuestas;
}

/**
 * @param snap serie de documentos de firebase
 *
 * @returns array
 */

export function listItem(snap: FirebaseFirestore.QuerySnapshot) {
  let respuestas: any[] = [];
  snap.forEach(item => {
    respuestas.push(item.data());
  });
  return respuestas;
}
