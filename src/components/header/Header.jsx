import React from "react"
import {Button} from "@consta/uikit/Button"
import { useNavigate } from "react-router-dom"
import { APP_ROUTE } from "../../const"
import { useSelector } from "react-redux"
import { clearUser } from "../../store/userSlice"
import { useDispatch } from "react-redux"

const Header = function() {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    var authButton = null

    if (user === null){
        authButton = <Button label="Вход" onClick={() => navigate(APP_ROUTE.signin)} />
    } else{
        let exit = ()=>{
            dispatch(clearUser())
            navigate(APP_ROUTE.signin)
        }
        authButton = <Button label="Выход" onClick={exit} /> 
    }

    return (
        <header style={{
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#f8f8f8",
            borderBottom: "1px solid #ddd",
            marginBottom: "1rem",
            position: "sticky",
        }}>
        <div style={{display:"flex", justifyContent: "space-evenly"}}>
            <Button label="Главная страница" onClick={() => navigate(APP_ROUTE.main)} />
            <Button label="Услуги компании" onClick={() => navigate(APP_ROUTE.services)} />
            <Button
                label={ user !== null ? user?.firstName + " " + user?.lastName: "Гость"}
                onClick={()=>navigate(APP_ROUTE.profile)}/>
            {authButton}
        </div>
        </header>
    )
}

export default Header;