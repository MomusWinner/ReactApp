import { useSelector } from "react-redux"
import { Avatar } from '@consta/uikit/Avatar';

const Profile = function(){
    const user = useSelector(state => state.user.user)

    return(
    <>
        <div style={{
            display: "flex",
            justifyContent: "space-around"
        }}>
            <div>
                <h1>Логин: {user?.username}</h1>
                <h3>Имя: {user?.firstName}</h3>
                <h3>Фамилия: {user?.lastName}</h3>
                <h3>Почта: {user?.email}</h3>
            </div>
            <Avatar
                style={{
                    width: "250px",
                    height: "250px"
                }}
                url={user?.image}>
            </Avatar>
        </div>
    </>)
}

export default Profile