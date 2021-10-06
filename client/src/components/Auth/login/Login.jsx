import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import StyleLogin from '../../Auth/login/Logon.module.css';
import {authUser} from '../../../actions/index'
import { Link } from 'react-router-dom'
const Login = () => {
    const dispatch = useDispatch()
    const [mail,setMail] = useState("")
    const [password,setPassword] = useState("")
    
    const handleSubmit =(e) => {
        e.preventDefault();
        dispatch(authUser(mail, password))

    }
    return(
        <div className={StyleLogin.container}>
            <div className={StyleLogin.containerdv}>
                <div>
                    <img src="" alt="" srcset="" />
                </div>
                <form actions="/authenticate" onSubmit={(e)=> handleSubmit(e)}>
                    <div>
                        <label>Email</label>
                        <input type="mail" name="mail" value={mail} onChange={(e) => setMail(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                        <Link to = '/'> 
                        <button > back </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;