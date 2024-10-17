import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import PasswordField from "../components/PasswordField";
import { Link } from "react-router-dom";
import { FoodHub_backend } from 'declarations/FoodHub_backend';

function Login(){

    const [details, setDetails] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const {id, value} = e.target
        setDetails({
            ...details,
            [id]: value
        })
    }

    const handleSubmit = () => {
        if (details.username.trim().length == 0){
            console.log("empty username");
            return;
        }
        if (details.password.trim().length == 0){
            console.log("empty password")
            return;
        }
        FoodHub_backend.loginmethod(JSON.stringify(details)).then((e) => {
            console.log(e);
        })
    }

    return (
        <div className="login-container flex">
            <div className="banner"></div>
            <div className="form center-parent">
                <div>
                    <h3 className="title">Login</h3>
                    <TextField 
                        className="field"
                        id="username" 
                        value={details.username} 
                        label="Username" 
                        fullWidth 
                        size="small" 
                        onChange={handleInputChange}/>

                    <PasswordField 
                        value={details.password} 
                        changed={handleInputChange}/>
                        
                    <Button variant="contained" fullWidth
                        onClick={handleSubmit}
                    >Login</Button>
                    <br /><br />
                    <p>Doesn't have an account yet? <Link to="/register" style={{color: "rgb(152 11 255)"}}><u>Sign Up</u></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;