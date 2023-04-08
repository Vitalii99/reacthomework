// more request than one - create class
class Service {
    _link = "https://swapi.dev/api/"
    // description
    async getPeoples() {
        const data = await fetch(`${this._link}people/`);
        if (data.status > 300 || data.status < 199) {
            throw new Error(`Виникла помилка у запиті: ${data.statusText} ${data.status} ${data.ok}`);
        } else {
            return await data.json();
        }
    }
    async getPlanets() {
        const data = await fetch(`${this._link}planets/`);
        if (!data.ok) {
            throw new Error(`Виникла помилка у запиті: ${data.statusText} ${data.status} ${data.ok}`);
        } else {
            return await (data.json());
        }

    }
    async getStarships() {
        const data = await fetch(`${this._link}starships/`);
        if (data.ok) {
            return await (data.json());
        } else {
            throw new Error(`Виникла помилка у запиті: ${data.statusText} ${data.status} ${data.ok}`);
        }
    }
    // image
    _linkGetImg = "https://starwars-visualguide.com/assets/img"

    async getPeopleImg(i) {
        const data = await fetch(`${this._linkGetImg}/characters/${i}.jpg`);
        // console.log(data.url)
        return data.url;
    }
    async getPlanetsImg(i) {
        const data = await fetch(`${this._linkGetImg}/planets/${i}.jpg`);
        return data.url;
    }
    async getStarshipsImg(i) {
        const data = await fetch(`${this._linkGetImg}/starships/${i}.jpg`);
        return data.url;
    }

}

export default Service;

/** 
    1.
    const people = fetch("https://swapi.dev/api/people/1/");
    people.then((data)=>{console.log(data.json())});
   
    2. only one request
    export const people = async (url)=>{
    const data = await fetch(url);
    return await data.json();

    3.
    name(){} - fn in class only
*/