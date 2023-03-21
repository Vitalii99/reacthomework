import React from "react";
import Btn from "./btn";
import Display from "./display";

import './main.css';


class Main extends React.Component {
    state = {
        counter: 0
    }

    updateCounter = (sing) => {
        // console.log(sing)
        if (sing === '+') {
            this.setState(({ counter }) => { //this.setState((state) => {
                return {
                    counter: (counter + 1) // (this.state.counter + 1)
                }
            })
        } else {
            this.setState(({ counter }) => {
                return {
                    counter: (counter - 1)
                }
            })
        }
    }

    render() {
        const { counter } = this.state // деструктуризація
        return (
            <main>
                <div className="wrapper">
                    <Btn onUpdateCounter={this.updateCounter} sing={"+"}></Btn>
                    <Display counter={counter}></Display>
                    {/* /**counter={this.state.counter}*/}
                    <Btn onUpdateCounter={this.updateCounter} sing='-'></Btn>
                </div>
            </main>
        )
    }
}

export default Main;

/**after
class Main extends React.Component {
    state = {
        counter: 0
    }

    updateCounter = (sing) => {
        // console.log(sing)
        if (sing === '+') {
            this.setState(({ counter }) => { //this.setState((state) => {
                return {
                    counter: (counter + 1) // (this.state.counter + 1)
                }
            })
        } else if (sing === '-') {
            this.setState(({ counter }) => {
                return {
                    counter: (counter - 1)
                }
            })
        }
    }

    render() {
        return (
            <main>
                <div className="wrapper">
                    <div className="button" onClick={() => { this.updateCounter('+') }}>+</div>
                    <div className="display">{this.state.counter}</div>
                    <div className="button" onClick={() => { this.updateCounter('-') }}>-</div>
                </div>
            </main>
        )
    }
}

export default Main;
 */


/**before */

// function Main() {
//     let counter = 0;

//     const updateCounter = (sing) => {
//         if (sing === '+') {
//             ++counter
//         } else if (sing === '-') {
//             --counter
//         }
//         console.log(counter)
//     }

//     return (
//         <main>
//             <div className="wrapper">
//                 <div className="button"
//                     onClick={() => { updateCounter('+') }}>+
//                 </div>
//                 <div className="display">{counter}</div>
//                 <div className="button"
//                     onClick={() => { updateCounter('-') }}>-
//                 </div>
//             </div>
//         </main>
//     )
// }

//export default Main;