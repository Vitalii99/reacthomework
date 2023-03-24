import React, { Component } from "react";
// import data from "../../requests"; // у компоненту section
// import  {data}  from "../../requests"; якщо export без default
import Button from "../button";
import { Section } from "../section";



class Main extends Component {
    // state = {
    //     allCurrency: null
    // }
    // componentDidMount() {
    //     data('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    //         .then((dataButtonLeft) => {
    //             this.setState(({ allCurrency }) => { //{allCurrency} = this.state.allCurrency
    //                 return { // new object
    //                     allCurrency: dataButtonLeft
    //                 }
    //             })
    //         });
    // }  // у компоненту section
    render() {
        // console.log(this.state.allCurrency) для state
        // 1 спосіб then
        // let promise = fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'); // без 2-го аргум GET-запит
        // promise.then(data => data.json()) // promise.then((data) => { return data.json()})
        // .then(currency => console.log(currency))
        // 2 спосіб await асинхронний 
        // const data = async (url) => {
        // const promise = await fetch(url);
        // return promise.json();
        // }
        // console.log(data(urlButtonLeft).then(()=>{}))
        // data(urlButtonLeft).then((dataButtonLeft) => { console.log(dataButtonLeft)})
        return (
            /** лайф-хак обгортка <></>*/
            <>
                <Button />
                <Section />
            </>
        )
    }
}

export default Main

/*Офіційний курс гривні до іноземних валют та облікова ціна банківських металів */
/* https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json */ 