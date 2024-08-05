import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import '../styles/Login.css';

const schema = z.object({
    username: z.string().min(3, "Username must be 3 or more characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must contain at least 8 characters"),
});

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username</label>
                    <input {...register("username")} />
                    {errors.username && <p>{errors.username.message}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input {...register("email")} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" {...register("password")} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                <button type="submit">Register</button>
            </form>
        </>
    );
};

export default Login;
