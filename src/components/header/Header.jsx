import React from "react"
import {Button} from "@consta/uikit/Button"
import {User} from "@consta/uikit/User"
import { useNavigate } from "react-router-dom"
import { APP_ROUTE } from "../../const"
import { useSelector } from "react-redux"

const Header = function() {
    const user = useSelector(state => state.user.user)
    const token = useSelector(state => state.user.token)

    const navigate = useNavigate();

    console.log(user.username)
    console.log(token)
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
            <Button label="Singin" onClick={() => navigate(APP_ROUTE.signin)} />
        </div>
        <p>{user?.username ?? "Гость"}</p>
        </header>
    )
}

export default Header;