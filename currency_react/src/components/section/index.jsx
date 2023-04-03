import React, { Component, Fragment } from "react";
import data from "../../requests";
import ReadOnlyRow from "../readOnlyRow";
import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import Linear from "../linear";
import { Table, TableBody, TableHead, TableCell, TableRow, } from '@mui/material';

import './section.css'

export class Section extends Component {
    state = {
        allCurrency: null,
        editIndex: -1,
        editNewFormData: [],
    }
    componentDidMount() {
        this.loadAsyncData();
        // console.log('create')
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.loadAsyncData();
            // console.log('update')
        }
        // console.log('update')
        // console.log(prevProps)
    }
    // componentWillUnmount() {
    //     this.loadAsyncData()
    //     console.log('delete')
    // }
    loadAsyncData = () => {
        data(this.props.url)
            .then((data1) => {
                this.setState(({ allCurrency }) => { //{allCurrency} = this.state.allCurrency
                    return { // new object
                        allCurrency: data1
                    }
                })
            });
    }

    //+++++++++++++++++++++++++++++++++++++++
    onHandlerEditClick = (e, index, row) => {
        e.preventDefault();
        this.setState({ editIndex: index })
        // console.log(this.state.editIndex)
        const editFormValues = {
            txt: row.txt,
            rate: row.rate,
            cc: row.cc
        }
        this.setState({ editNewFormData: editFormValues})
    }

    
    //-
    onHandlerCheckClick = (e, index, editNewFormData, allCurrency) => {
        e.preventDefault();
        this.setState({ editIndex: -1 })
        // console.log(index)
        const editFormInfo = {
            txt: editNewFormData.txt,
            rate: editNewFormData.rate,
            cc: editNewFormData.cc,
        }
        console.dir(editFormInfo)

        const newCurrency = [...allCurrency];
        newCurrency[index]=editFormInfo;
        this.setState({ newCurrency: newCurrency})

    }
    

    //++++++++++++++++++++++++++++++++++++++++++++
    onHandlerEditFormChange = (e, row) => {
        e.preventDefault();
        const filedName = e.target.name;
        // console.log(filedName)
        const filedValue = e.target.value;
        // console.log(filedValue)
        const editNewFormData = { ...row };
        // console.log(editNewFormData)
        editNewFormData[filedName] = filedValue;

        this.setState({ editNewFormData: editNewFormData})
        // console.log(editNewFormData)

    }


    render() {
        const { allCurrency } = this.state;
        const { editIndex } = this.state;
        const {editNewFormData}= this.state;
        // console.log({ allCurrency }) // null
        // function adding zero before number
        function addZero(d) {
            return (d < 10) ? '0' + d : d;
        }
        // function read time when creating currency
        function getUserTime(time = new Date()) {
            let date = addZero(time.getDate());
            let month = addZero(time.getMonth());
            let year = time.getFullYear();
            let hours = addZero(time.getHours());
            let minutes = addZero(time.getMinutes());
            // let seconds = addZero(time.getSeconds());
            return `${date}.${month}.${year} : ${hours}.${minutes}`;
        }
        return (
            <section>
                <h1>Курс на {getUserTime()} </h1>
                <form onSubmit={this.onHandlerCheckClick}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Назва:</TableCell>
                                <TableCell align="center">Ціна:</TableCell>
                                <TableCell align="center">Код:</TableCell>
                                <TableCell align="center">Дії:</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.isArray(allCurrency) ?
                                allCurrency.map((row, index) => {
                                    return (
                                        <Fragment key={(index * 5 + 'a')}>
                                            {editIndex === index ?
                                                (<TableRow>
                                                    <TableCell>
                                                        <TextField
                                                            id="rd"
                                                            name="txt"
                                                            value={editNewFormData.txt}
                                                            variant="standard"
                                                            placeholder="Введіть назву..."
                                                            onChange={(e) => this.onHandlerEditFormChange(e,
                                                                index, row)}
                                                        >
                                                        </TextField>
                                                    </TableCell>
                                                    <TableCell>
                                                        <TextField
                                                            id="rf"
                                                            name="rate"
                                                            value={editNewFormData.rate}
                                                            variant="standard"
                                                            placeholder="Введіть ціну..."
                                                            onChange={(e) => this.onHandlerEditFormChange(e,
                                                                index, row)}
                                                        >
                                                        </TextField>
                                                    </TableCell>
                                                    <TableCell>
                                                        <TextField
                                                            id="rh"
                                                            name="cc"
                                                            value={editNewFormData.cc}
                                                            variant="standard"
                                                            placeholder="Введіть код..."
                                                            onChange={(e) => this.onHandlerEditFormChange(e,
                                                                index, row)}
                                                        >
                                                        </TextField>
                                                    </TableCell>
                                                    <TableCell>
                                                        <button
                                                            className="check-button"
                                                            type="submit"
                                                            onClick={(e) => this.onHandlerCheckClick(e,
                                                                 index)}
                                                        >
                                                            <CheckIcon />
                                                        </button>
                                                    </TableCell>
                                                </TableRow>
                                                ) : (<ReadOnlyRow row={row}
                                                    onClick={(e) => this.onHandlerEditClick(e, index, row)} />
                                                )}
                                        </Fragment>)
                                }) : (
                                    <Fragment>
                                        <TableRow><TableCell colSpan={4}><Linear /></TableCell></TableRow>
                                    </Fragment>)
                            }
                        </TableBody>
                    </Table>
                </form>
            </section>
        )
    }
}