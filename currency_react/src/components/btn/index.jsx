import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const buttonStyles = makeStyles({
  button: {
    backgroundColor: 'rgb(0 128 0)',
    fontSize: '1.25rem',
  },
});

export default function Btn({ value }) {
  const classes = buttonStyles();

  // console.log(value)
  return (
    <Stack display='grid'>
      <Button className={classes.button} color='success' variant="contained">{value}</Button>
    </Stack>
  );
}


/**import React from "react";

import './button.css'

const Button = () => {
    const onClick = () => {
        console.log('good')
    }
    return (
        <header className="wrap_btn">
            <div onClick={onClick} type="button">
                Офіційний курс гривні до іноземних валют та облікова ціна банківських металів
            </div>
            <div onClick={onClick} type="button">Національний банк України</div>
            <div onClick={onClick} type="button">
                Основні показники діяльності банків України</div>
        </header>

    )
}

export default Button; */