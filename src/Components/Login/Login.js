import React, {useState} from 'react';
import CustomInput from "../CustomInput";
import Button from "@mui/material/Button";

function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }
    function handleChangePW(e) {
        setPassword(e.target.value)
    }
    function handleSubmit(){
        alert("Its working")
    }

    return (
        <div>
            <h2>Login</h2>
            <form className="form">
                <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                        fullWidth: true
                    }}
                    handleChange={handleChangeEmail}
                    type="text"
                    value={email}
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
                        className="form__custom-button"
                        onClick={handleSubmit}
                >
                    Log in
                </Button>
            </form>
        </div>
    )
}
    export default Login

