import { useSelector } from "react-redux"
import { APP_ROUTE } from "../../const"
import { useNavigate } from "react-router"
import { Avatar } from '@consta/uikit/Avatar';
import { useEffect } from "react";

const Profile = function(){
    const navigate = useNavigate()
    const user = useSelector(state => state.user.user)
    useEffect(()=>{
        return navigate(APP_ROUTE.signin)
    }, [])

    return(
    <>
        <div style={{
            display: "flex",
            justifyContent: "space-around"
        }}>
            <div>
                <h1>Логин: {user.username}</h1>
                <h3>Имя: {user.firstName}</h3>
                <h3>Фамилия: {user.lastName}</h3>
                <h3>Почта: {user.email}</h3>
            </div>
            <Avatar
                style={{
                    width: "250px",
                    height: "250px"
                }}
                url={user.image}>
            </Avatar>
        </div>
    </>)
}

export default Profile