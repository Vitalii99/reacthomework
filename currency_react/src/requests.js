const data = async (url) => {
    try {
        const promise = await fetch(url);
        if (promise.status === 200) {
            return promise.json();
        } else {
            throw new Error(console.log(`Error: ${promise.status} ${promise.statusText} ${promise.ok}`));
        }
    } catch (error) {
        console.log(error)
    }
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