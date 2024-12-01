import React from "react"
import {Button} from "@consta/uikit/Button"
import {User} from "@consta/uikit/User"
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
            display: "flex",
            justifyContent: "space-evenly",
            position: "sticky",
            top: 0,
            paddingBottom: "20px",
        }}>
        <div>
            <Button label="Главная страница" onClick={() => navigate(APP_ROUTE.main)} />
            <Button label="Услуги компании" onClick={() => navigate(APP_ROUTE.services)} />
            <Button label={ user !== null ? user?.firstName + " " + user?.lastName: "Гость"}></Button>
            {authButton}
        </div>
        </header>
    )
}

export default Header;