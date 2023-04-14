import React, { useState, createContext } from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details";

import './list-main.css';

const PersonContext = createContext();

const ListMain = ({ request }) => {
    // data user (object)
    const [personInformation, setPersonInformation] = useState(null);

    // reciving get data user (object)
    const onElementInfo = (value) => {
        setPersonInformation(value);
        // console.dir(value);
    }

    return (
        <PersonContext.Provider
            value={{
                onElementInfo: onElementInfo, setPersonInformation: setPersonInformation, personInformation: personInformation
            }}>
            <div className="wrapper">
                <div>
                    <ItemList request={request} />
                </div>
                <div>
                    <PersonDetails />
                </div>
            </div>
        </PersonContext.Provider >
    )
}

export { PersonContext, ListMain };
