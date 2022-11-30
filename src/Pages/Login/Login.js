import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';
import logo from '../../usedlapi-logo.png';
import useJwtToken from '../CustomHooks/useJwtToken/useJwtToken';


const Login = () => {

    const { login, googleLoginProvider, loading } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useJwtToken(loginUserEmail);

    const from = location?.state?.from?.pathname || '/'

    if (loading) {
        return <Spinner></Spinner>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        login(email, password)
            .then(result => {
                form.reset();
                setLoginUserEmail(email)
                toast.success('User Logged in Successfully')
            }).then(err => console.error(err))
    };

    const handleGoogleLogin = () => {
        googleLoginProvider(googleProvider)
            .then(result => {
                console.log(result.user);
                const name = result.user.displayName;
                const email = result.user.email;
                const role = "Buyer";
                const user = { name, email, role }
                saveNewUser(user);
            }).catch(error => console.error(error))
    }

    const saveNewUser = (user) => {
        const uEmail = user.email;
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setLoginUserEmail(uEmail);
                toast.success('User Logged in Successfully')
            })
    }

    // const handleGoogleLogin = () => {
    //     googleLoginProvider(googleProvider)
    //         .then(result => {
    //             console.log(result.user);
    //             const name = result.user.displayName;
    //             const email = result.user.email;
    //             const role = "Buyer";
    //             // const user = {  email }
    //             saveNewUser(email);
    //         }).catch(error => console.error(error))
    // }

    // const saveNewUser = (email) => {
    //     // const uEmail = user.email;
    //     fetch(`http://localhost:5000/users/${email}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(email)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             localStorage.setItem('accessToken', data.token);
    //             toast.success('User Logged in Successfully')
    //         })
    // }


    return (
        <div>
            <section>
                <div className="flex min- overflow-hidden">
                    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                        <div className="w-full max-w-xl mx-auto lg:w-96">
                            <div>
                                {/* <Link to='/'><p className="text-purple-600 text-medium text-center">Used Lapi</p></Link>
                                <h2 className="text-center mt-6 text-3xl font-extrabold text-neutral-600">Sign in</h2> */}
                                <img className="object-cover w-40 mx-auto" src={logo} alt="user avatar" />
                                <div className="flex items-center justify-center mt-6">
                                    <span className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-purple-500 dark:border-purple-400 dark:text-white">Sign in</span>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="mt-6">
                                    <form onSubmit={handleLogin} className="space-y-6">
                                        <div>
                                            <label for="email" className="block text-sm font-medium text-neutral-600"> Email address </label>
                                            <div className="mt-1">
                                                <input id="email" name="email" type="email" autocomplete="email" required placeholder="Your Email" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"></input>
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label for="password" className="block text-sm font-medium text-neutral-600"> Password </label>
                                            <div className="mt-1">
                                                <input id="password" name="password" type="password" autocomplete="current-password" required placeholder="Your Password" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"></input>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="text-sm">
                                                <Link to='/register'><p className="font-medium text-purple-600 hover:text-purple-500 text-center"> Don't have an account yet! Sign Up</p></Link>
                                            </div>
                                        </div>

                                        <div>
                                            <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-purple-600 rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Sign in</button>
                                        </div>
                                    </form>
                                    <div className="relative my-4">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-2 bg-white text-neutral-600"> Or continue with </span>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={handleGoogleLogin} type="submit" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-purple-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                            <div className="flex items-center justify-center">
                                                <span className="ml-4"> Log in with Google</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    );
};

export default Login;