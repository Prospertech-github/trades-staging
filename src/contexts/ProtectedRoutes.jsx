import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate} from 'react-router-dom'

export default function PrivateRoutes({children}) {
    // Retrieving the value of the isLoggedIn state from the AuthContext using the useContext React Hook 
    const {isLoggedIn} = useContext(AuthContext)
    
    // checking if user is Logged in via the isLoggedIn state to redirect user to the Login page if user is not 
    if(!isLoggedIn){
        return <Navigate  to="/login" replace/>
    }
    return children;
}