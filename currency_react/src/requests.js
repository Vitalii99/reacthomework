const data = async (url) => {
    const promise = await fetch(url);
    return promise.json();
}
/**або export {} */
// чистий java script
export default data;

// інший спосіб
/**export const data = async (url) => {
    const promise = await fetch(url);
    return promise.json();
}
//або export {}
// чистий java script*/