import React from "react";
import { connect } from "react-redux";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DropDownContacts } from "./dropdown/contacts";
import { DropDownRestaurants } from "./dropdown/restaurants";
import Button from 'react-bootstrap/Button';

import './header.css'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Header = (data) => {
    return (
        <header>
            <DropDownRestaurants />
            <DropDownContacts />
            <p><a href="#!">
                <img src="/logo-white.png" alt="MAFIA" title="MAFIA" />
            </a></p>
            <Button variant="outline-success">Відстежити замовлення</Button>{' '}
            <IconButton aria-label="cart" color="white">
                <StyledBadge badgeContent={data.product.length} color="error">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </header>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps,)(Header);


