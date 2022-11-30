import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const [createdUser, setCreatedUser] = useState('');
    const { createEmailUser, userProfileUpdate } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignUpForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const role = form.role.value;
        console.log(email, password, role)

        createEmailUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Sign Up completed successfully');
                form.reset();
                navigate('/');
                const userInfo = {
                    displayName: name,
                    photoURL: photoURL
                }
                userProfileUpdate(userInfo)
                    .then(() => {
                        saveUser(name, email, role);
                     })
                    .catch(err=>console.log(err))
            })
            .catch(err => console.error(err.message));

    }

    const saveUser = (name, email, role) => {
        const user = {
            
            name,
            email,
            role
        };
        fetch('https://old-biker-server.vercel.app/users', {
            method: "POST",
            headers: {
                "content-type": "application/json" 
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUser(data);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sing Up now!!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSignUpForm}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Are you Buyer or Seller?</span>
                                    </label>
                                    <select name='role' className="select select-bordered w-full max-w-xs">
                                        <option selected>Buyer</option>
                                        <option>Seller</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="text" name='photoURL' placeholder="photo" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                        <span className='label-text-alt'>Already a buyer? <Link to="/login" className="label-text-alt link link-hover">Login</Link></span>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <Toaster></Toaster>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;