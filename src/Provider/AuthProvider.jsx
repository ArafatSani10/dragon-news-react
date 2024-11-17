import { createContext, useState } from "react";

 export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState({
        name :'arafat',
        email : 'rahmansai17@gamil.com'
    });

    const authInfo = {
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;