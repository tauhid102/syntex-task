import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import '../Style/Style.css'
import useToken from '../../hooks/useToken';
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate=useNavigate();
    const location=useLocation();
    const[token]=useToken(gUser);
    let from=location.state?.from?.pathname||"/";

    let singnInError;

    if (loading || gLoading) {
        return <div className="mt-5 pt-5 d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    if (error || gError) {
        singnInError = <p className='text-danger'>{error?.message} || {gError?.message}</p>
    }
    if(user||gUser){
        navigate(from,{replace:true})
    }
   
    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className='container mt-5'>
            <div className='row row-cols-1 row-cols-md-3 '>
                <div className="col">

                </div>
                <div className="col">
                    <div className='w-100 m-auto mt-5 loginFrom'>
                        <h3 className=' text-center'>Sign In With</h3>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="">
                                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Email"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })}
                                    />
                                    <label for="exampleFormControlInput1" className="form-label">
                                        {errors.email?.type === 'required' && <p role="alert" className='text-danger'>{errors.email.message}</p>}
                                        {errors.email?.type === 'pattern' && <p role="alert" className='text-danger'>{errors.email.message}</p>}
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                                    <input
                                        type="Password"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Password"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer'
                                            }
                                        })}
                                    />
                                    <label for="exampleFormControlInput1" className="form-label">
                                        {errors.password?.type === 'required' && <p role="alert" className='text-danger'>{errors.password.message}</p>}
                                        {errors.password?.type === 'minLength' && <p role="alert" className='text-danger'>{errors.password.message}</p>}
                                    </label>
                                </div>
                                {singnInError}
                                <div className='d-grid '>
                                    <input className='btn btn-info' type="submit" value="Login" />
                                </div>
                            </form>
                            <p className=' text-center'>Not a Member?<Link to='/register'> Sign up</Link> </p>
                        </div>
                        <div className='d-grid text-center'>
                            <button className='btn btn-dark' onClick={() => signInWithGoogle()}>Google Sign in</button>
                        </div>

                    </div>
                </div>
                <div className="col">

                </div>
            </div>

        </div>
    );
};

export default Login;