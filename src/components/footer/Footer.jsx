import React from "react"
import {Button} from "@consta/uikit/Button"
import { useNavigate } from "react-router-dom"
import { APP_ROUTE } from "../../const"

const Footer = function(){
    const navigate = useNavigate()

    return(
        <div style={{
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
            <p>@ 2024 Mega Company</p>
        </div>
        </div>
    )
}

export default Footer