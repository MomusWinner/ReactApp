import { Button } from '@consta/uikit/Button';
import { TextField } from '@consta/uikit/TextField';
import { useState, } from 'react';
import { signin } from '../../store/api-actions';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../../store/userSlice';

const Signin = ()=>{

    const token = useSelector(state => state.user.token)
    const dispatch = useDispatch()

    const [status, setStatus] = useState(state => state)

    const [login, setLogin] = useState(null);
    const handleLoginChange = (value) => setLogin(value);

    const [password, setPassword] = useState(null);
    const handlePasswordChange = (value) => setPassword(value);


    function handleSignin(){
        signin({
            "username": login,
            "password": password
        }).then(resp => {
            if (resp.status = 200){
                let respData = resp.data
                setStatus("success")
                console.log("Success login")
                dispatch(
                    setUser(
                        {
                            user:
                            {
                                username: respData.username,
                                firstName: respData.firstName,
                                lastName: respData.lastName,
                                email: respData.email,
                                image: respData.image
                            },
                            token: respData.accessToken
                        }
                    )
                )
            }
        }).catch(_=>{
            setStatus("alert")
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
        <Button label="Войти" onClick={handleSignin} style={{marginTop:"10px"}}/>
        </>
    )
}

export default Signin