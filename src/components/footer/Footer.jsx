import React from "react"
import {Button} from "@consta/uikit/Button"
import { useNavigate } from "react-router-dom"
import { APP_ROUTE } from "../../const"

const Footer = function(){
    const navigate = useNavigate()

    return(
        <footer>
            <div style={{display:"flex", justifyContent: "space-evenly"}}>
                <Button label="Главная страница" onClick={() => navigate(APP_ROUTE.main)} />
                <Button label="Услуги компании" onClick={() => navigate(APP_ROUTE.services)} />
                <p>@ {new Date().getFullYear()} Mega Company</p>
            </div>
        </footer>
    )
}

export default Footer