import React, {useState} from 'react';
import CustomInput from "../CustomInput";
import Button from "@mui/material/Button";
import axios from "axios";



function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function postUserRegistration() {
        try{
            const res = axios.post(`http://localhost:3001/register`, {
                email: email,
                password: password
            }).then(function (res){
                if(res.status === 200){
                    props.setOverallEmail(email)
                    props.setCurrentState("");
                }
            }).catch(function (error){
                console.log(error);
            });
        } catch(e){
        }

    }

    function handleChangeEmail(e) {
        setEmail(e.target.value)

    }
    function handleChangePW(e) {
        setPassword(e.target.value)
    }
    function handleSubmit(){
       postUserRegistration()
    }

    return (
        <div>
            <h2>Login</h2>
            <form className="form">
                <CustomInput
                    labelText="Email"
                    id="email"
                    value={email}
                    handleChange={handleChangeEmail}
                    formControlProps={{
                        fullWidth: true
                    }}
                    type="text"
                />
                <CustomInput
                    labelText="Password"
                    id="password"
                    value={password}
                    formControlProps={{
                        fullWidth: true
                    }}
                    handleChange={handleChangePW}
                    type="password"
                />
                <Button type="button"
                        color="primary"
                        onClick={handleSubmit}
                >
                    Log in
                </Button>
            </form>
        </div>
    )
}
    export default Login

