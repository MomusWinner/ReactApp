import React from "react"
import {Button} from "@consta/uikit/Button"
import { useNavigate } from "react-router-dom"
import { APP_ROUTE } from "../../const"
import { useSelector } from "react-redux"
import { clearUser } from "../../store/userSlice"
import { useDispatch } from "react-redux"
import "./Header.css"

const Header = function() {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    var tableAuth = null

    if (user === null){
        tableAuth = 
        <>
            <Button className="tab" label="Гость" view="ghost"/>
            <Button className="tab" label="Вход" onClick={() => navigate(APP_ROUTE.signin)} />
        </>
    } else{
        let exit = ()=>{
            dispatch(clearUser())
            navigate(APP_ROUTE.signin)
        }
        tableAuth =
        <>
            <Button className="tab" label="Услуги компании" onClick={() => navigate(APP_ROUTE.services)} />
            <Button className="tab" label={user?.firstName + " " + user?.lastName} onClick={()=>navigate(APP_ROUTE.profile)}/> 
            <Button className="tab" label="Выход" onClick={exit} />
        </>
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
                <Button className="tab" label="Главная страница" onClick={() => navigate(APP_ROUTE.main)} />
                {tableAuth}
            </div>
        </header>
    )
}

export default Header;