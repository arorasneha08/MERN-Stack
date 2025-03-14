import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate(); 
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const loginHandler = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/v1/user/login", user, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            console.log("Response from API:", res.data); 

            if (res.data.message) {
                toast.success(res.data.message);
                navigate("/"); 
            }
        }
        catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <div>
            <Input type="email" name="email" placeholder="enter email" value={user.email} onChange={changeHandler} />
            <Input type="password" name="password" placeholder="enter password" value={user.password} onChange={changeHandler} />
            <Button onClick={loginHandler}>Login</Button>
        </div>
    );
}
