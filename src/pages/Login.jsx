import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import React from 'react'
import http from '../helpers/http'
import * Yup from 'yup'

const validate

const FormLogin = ({ values, errors, touched, handlechange, handleBlur, handleSubmit, isSubmitting }) => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = React.useState('')
    const [token, setToken] = React.useState('')
    // const doLogin = async (event) => {
    //     event.preventDefault()
    //     setErrorMessage('')
    //     try {
    //         const { value: email } = event.target.email
    //         const { value: password } = event.target.password
    //         const body = new URLSearchParams({ email, password }).toString()
    //         const { data } = await http().post('http://localhost:8888/auth/login', body)
    //         window.localStorage.setItem('token', data.results.token)
    //         setToken(data.results.token)
    //     } catch (err) {
    //         const message = err?.response?.data?.message
    //         if (message) {
    //             setErrorMessage(message)
    //         }
    //     }

    // }
    React.useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token, navigate])
    return (
        <form onSubmit={handleSubmit} className="w-[80%] flex flex-col gap-5">
            <div>
                WeTick
            </div>
            <div>
                Sign In
            </div>
            <div>
                Hi, Welcome back to Urticket!
            </div>
            {errorMessage &&
                (<div>
                    <div className='alert alert-error'>{errorMessage}</div>
                </div>)}
            <div className='from-control'>
                <input
                    placeholder="Email"
                    className="input input-bordered w-full input-error"
                    type="email"
                    name="email"
                    onChange={handlechange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {error.email && touched.email && (
                    <label className='label'>
                        <span className='label-text-alt text-error'>
                        {error.email}
                        </span>
                    </label>
                )}
            </div>
            <div className='from-control'>
                <input
                    placeholder="password"
                    className="input input-bordered w-full input-error"
                    type="password"
                    name="password"
                    onChange={handlechange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {error.password && touched.password && (
                    <label className='label'>
                        <span className='label-text-alt text-error'>
                        {error.password}
                        </span>
                    </label>
                )}
            </div>
            <div className='text-right'>
                <Link className='text-primary fond-bold' to="/forgot-password">Forgot Password?</Link>
            </div>
            <div>
                <button className="btn btn-primary btn-block">Sign In</button>
            </div>
            <div className='text-center'>
                or signin with
            </div>
            <div className='flex justify-center gap-5'>
                <button className='btn btn-secondary bg-white border-primary hover:border-primary hover:bg-primary w-24'>
                    <FcGoogle size={25} />
                </button>
                <button className='btn btn-secondary bg-white border-primary hover:border-primary hover:bg-primary w-24'>
                    <FaFacebook color='#4267B2' size={25} />
                </button>
            </div>
        </form>
    )
}

const Login = () => {

    return (
        <div className="flex h-screen">
            <div className="hidden md:flex flex-1 bg-orange-400"></div>
            <div className="max-w-md w-full flex justify-center items-center">
                <Formik initialValues={{
                    email: '',
                    password: ''
                }}>
                    {(proops) => {
                        <FormLogin {...proops} />
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default Login;