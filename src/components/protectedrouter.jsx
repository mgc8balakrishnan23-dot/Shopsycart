import { Navigate } from "react-router-dom"

function ProtectedRouter({children}){

    const isLoggedIn=localStorage.getItem("isLoggedIn") === "true"
    return isLoggedIn ? children :<Navigate to="/login"/>
}
export default ProtectedRouter;