/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";



export const LinkContext = createContext();

const initialState = [];

const reducer = (currentState, action) => {
    switch (action.type) {
        case 'createLink':
            return [...currentState, action.payload];
        case 'createProfile':
            return [...currentState, action.payload];
            case 'removeLink': 
            return currentState.filter(link => link.id !== action.payload);
        default:
            return currentState;
    }
};


const CreateLinkProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const values = {
        state,
        dispatch,
    }
    return (
        <LinkContext.Provider value={values}>
            {children}
        </LinkContext.Provider>
    );
};

export default CreateLinkProvider;