import React from "react";
import Services from '../services/service';
import { connect } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import { addProduct } from "../../redux/actions";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './menu.css';

const Menu = ({ state, addProduct }) => {
    
    const menu = new Services();
    // const [cards, setCards] = useState(menu.getMenu());
    const cards = menu.getMenu()

    return (
        <div className="menu">
            {cards === null ?
                <CircularProgress color="inherit" />
                :
                <div className="wrapper-cards">{cards.filter((elem) => {
                    return elem.stopList === false;
                }).map((elem, i) => {
                    return <Card key={i * 5 + "q"} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={elem.productImageUrl} />
                        <Card.Body>
                            <Card.Title>{elem.productName}</Card.Title>
                            <Card.Text>Вага: {elem.productWeiht}</Card.Text>
                            <Card.Text>Ціна: {elem.price}</Card.Text>
                            <Button onClick={() => { addProduct(elem) }} variant="dark">Купити</Button>
                        </Card.Body>
                    </Card>
                })}</div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (information) => { // in Menu this addProduct copy paste
            dispatch(addProduct(information))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

/**
return  <ul key={i * 5 + "q"} className="card">
        <li><img src={elem.productImageUrl} width="100%" alt="MEAL" /></li>
        <li>{elem.productName}</li>
        <li>{elem.price}</li>
        <button onClick={() => { addProduct(elem) }}>Купити</button>
        </ul>
 */