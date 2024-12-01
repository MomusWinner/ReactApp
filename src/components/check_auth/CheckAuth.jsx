
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { APP_ROUTE } from "../../const"
import { useEffect } from "react"

const CheckAuth = function({children}){
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate()

    useEffect(()=>{
        if(user === null){
            console.log("not login")
            navigate(APP_ROUTE.signin)
        }
    },[])

    return children
}
console.log("login  ")
export default CheckAuth