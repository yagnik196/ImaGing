import { createContext, useEffect, useState } from "react";
import {toast} from 'react-toastify'
import axios from 'axios'

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [showLogin, setShowLogin] = useState(false);
    // get token from local storage
    const [token, settoken] = useState(localStorage.getItem('token'));

    // credits
    const [credit, setcredit] = useState(false)


    const BackendURL = import.meta.env.VITE_BACKEND_URL

    const load_credits = async () => {
        try {
            const { data } = await axios.get(BackendURL + "/api/user/credits", { headers: { token } });
            if (data.success) {
                setcredit(data.credits);
                setUser(data.user)
            }
        } catch (e) {
            console.log(e.message);
            toast.error(e.message);
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        settoken("");
        setUser(null)
    }
    useEffect(() => {
        if (token) {
            load_credits();
        }
    }, [token])


    const Value = {
        user, setUser, showLogin, setShowLogin, BackendURL, token, settoken, credit, setcredit, load_credits, logout
    }

    return (
        <AppContext.Provider value={Value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
