//Definicion del estado y funciones que alteran ese estado.
import { useState } from 'react';
import UserContext from './UserContext';

const UserState = ({ children }) => {

    const initialState = {
        email: "example@gmail.com",
        pass: null,
        img: null,
        clothes: []
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
            clothes: state.clothes,
            setData
         }}>
            { children }
        </UserContext.Provider>
    );
}

export default UserState;