import React from "react";
import data from "../../requests";

import './section.css'

export class Section extends React.Component {
    state = {
        allCurrency: null
    }
    componentDidMount() {
        data('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then((dataButtonLeft) => {
                this.setState(({ allCurrency }) => { //{allCurrency} = this.state.allCurrency
                    return { // new object
                        allCurrency: dataButtonLeft
                    }
                })
            });
    }
    render() {
        const { allCurrency } = this.state;
        console.log({allCurrency})
        return (
            <section>
                <table>
                    <caption>Курс: </caption>
                    <tbody>
                        <tr>
                            <td>Назва валюти:</td>
                            <td>Ціна:</td>
                            <td>Код валюти:</td>
                        </tr>
                        {Array.isArray(allCurrency) ?
                            allCurrency.map((elem, i) => {
                                return (
                                    <tr key={i * 5 + 'a'}>
                                        <td>{elem.txt}</td>
                                        <td>{elem.rate}</td>
                                        <td>{elem.cc}</td>
                                    </tr>
                                )
                            }) : null}
                    </tbody>
                </table>
            </section>
        )
    }
}