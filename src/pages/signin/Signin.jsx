import { Button } from '@consta/uikit/Button';
import { TextField } from '@consta/uikit/TextField';
import { useState, } from 'react';
import { signin } from '../../store/api-actions';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../../store/userSlice';
import { useNavigate } from 'react-router';

const Signin = ()=>{
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [status, setStatus] = useState(null)

    const [login, setLogin] = useState(null);
    const handleLoginChange = (value) => setLogin(value);

    const [password, setPassword] = useState(null);
    const handlePasswordChange = (value) => setPassword(value);

    const [errorMessage, setErrorMessage] = useState("")

    function handleSignin(){
        signin({
            "username": login,
            "password": password
        }).then(resp => {
            if (resp.status = 200){
                let respData = resp.data
                setStatus("success")
                dispatch(
                    setUser(
                        {
                            user: respData,
                            token: respData.accessToken
                        }
                    )
                )
                navigate("/")
            }
        }).catch(err=>{
            setStatus("alert")
            setErrorMessage(JSON.parse(err.request.response).message)
        })
    }

    return(
        <>
        <TextField
            status={status}
            label='Логин'
            type="text"
            placeholder="Ваня"
            value={login}
            onChange={handleLoginChange}
        />
        <TextField
            status={status}
            label='Пароль'
            placeholder="qwerty"
            type="password"
            value={password}
            onChange={handlePasswordChange}
        />
        <p style={{color:"red"}}>{errorMessage}</p>
        { (!password || !login) ? 
            <Button label="Войти" disabled={true} onClick={handleSignin} style={{marginTop:"10px"}}/>
            : <Button label="Войти" onClick={handleSignin} style={{marginTop:"10px"}}/>}
        </>
    )
}

export default Signin