import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { userContext } from "../../Provider/AuthContext";


const Login = () => {
    const { loggedinUser, createGoogleUser } = useContext(userContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        e.target.reset()

        if (password < 6) {
            return toast.error('At least 6 characters');
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('At least 1 capital letter');
        }
        else if (!/[!S#$%&?]/.test(password)) {
            return toast.error('At least 1 special character');
        }

        loggedinUser(email, password)
            .then(() => {
                toast.success('Successfully Login!!');
            })
            .then((error) => {
                console.log(error.code);
            })
    }

    const handleGooglePopUp = () => {
        createGoogleUser()
            .then(() => {
                toast.success('Successfully Login!!');
            })
            .then((error) => {
                console.log(error);
            })
    }
    return (
        <div className=" container mx-auto hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <h1 className=" text-3xl font-bold text-green-500">Please Login</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p href="#" className="label-text-alt link link-hover">Don't have a account? <Link to='/resigtration' className=" text-green-500 text-xl font-bold">Create a Account</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <h1 onClick={handleGooglePopUp} className="btn text-green-500 text-xl font-bold">Login with Google</h1>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Login;