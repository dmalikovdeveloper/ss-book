export const deepObjClone = (obj: object | null) => {
  return JSON.parse(JSON.stringify(obj));
}
