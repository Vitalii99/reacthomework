import React, { Component } from "react";
// import data from "../../requests"; // у компоненту section
// import  {data}  from "../../requests"; якщо export без default
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"; // Routes потужнє оновлення Switch
import Btn from "../btn";
import { Section } from "../section";
import Home from "../home";

import './main.css';

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
                <Router>
                    <header className="wrapBtn">
                        <NavLink to='/currency-info'>
                            <Btn value={'Офіційний курс гривні до іноземних валют та облікова ціна банківських металів'} /></NavLink>
                        <NavLink to='/home'><Btn value={'Home'} /></NavLink>
                        <NavLink to='/bank-info'><Btn value={'Основні показники діяльності банків України'} /></NavLink>
                    </header>
                    <Routes>
                        <Route exact path="/currency-info" element={
                            <Section url="https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json" />} />
                        <Route exact path="/home" element={<Home />} />
                        <Route exact path="/bank-info" element={
                            <Section url="https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank?date=20160101&period=m&json" />} />
                    </Routes>
                </Router>
            </>
        )
    }
}

export default Main;

/**npm install --legacy-peer-deps --save react-router-dom */

/*Офіційний курс гривні до іноземних валют та облікова ціна банківських металів */
/* https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json */

/**Основні показники діяльності банків України */
/**https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank?date=20160101&period=m&json */