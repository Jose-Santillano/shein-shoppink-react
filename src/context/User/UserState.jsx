//Definicion del estado y funciones que alteran ese estado.
import { useState } from 'react';
import UserContext from './UserContext';

const UserState = ({ children }) => {

    const initialState = {
        email: "example@gmail.com",
        pass: null,
        img: null,
        colors: [],
        pieces: [],
        clothes: "",
        options: "",
        price: 0
    }

    const [state, setState] = useState(initialState)

    const setData = (data) => {
        setState(data);
    }

    return (
        <UserContext.Provider value={{ 
            email: state.email,
            pass: state.pass,
            img: state.img,
            colors: state.colors,
            pieces: state.pieces,
            clothes: state.clothes,
            options: state.options,
            price: state.price,
            setData
         }}>
            { children }
        </UserContext.Provider>
    );
}

export default UserState;