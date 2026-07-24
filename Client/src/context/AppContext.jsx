import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null)


    const Value = {
        user, setUser
    }

    return (
        <AppContext.Provider value={Value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
