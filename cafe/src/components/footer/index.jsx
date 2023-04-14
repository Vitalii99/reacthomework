import React from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';

import './footer.css'

const Footer = (data) => {
    // console.dir(data.product)
    let totalPrice = 0;
    return (
        <footer>
            <div className="footer-top">
                <p><a href="#!">
                    <img src="logo-white.png" alt="MAFIA" title="MAFIA" />
                </a></p>
                {data.product !== null ?
                    data.product.map((elem) => {
                        if (elem) {
                            totalPrice += elem.price
                        }
                        return null;
                    })
                    :
                    null
                }
                <div className="price">Сума: {totalPrice} грн</div>
                <div>
                    <Button variant="outline-success">Замовити</Button>{' '}
                </div>
            </div>
            <div className="order-information">
                <div className="description">{data.product === null ? <li></li> :
                    data.product.map((elem, i) => {
                        return <ul key={i * 7 + "j"}>
                            <li>{elem.productName}</li>
                            <li>{elem.productWeiht}</li>
                            <li className="list-ingredients">{elem.ingredients}</li>
                        </ul>;
                    })
                }
                </div>
            </div>
        </footer >
    )
}
const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps,)(Footer);

/** 
    for (let elem of Object.values(data.product)) {
        if (elem.price) {
            console.dir(elem.price)
            totalPrice += +elem.price
        }
        console.dir(totalPrice)
    }
 */