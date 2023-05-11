import {Link} from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import React from 'react'
import http from '../helpers/http'

const Login = ()=> {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = React.useState('')
    const [token, setToken] = React.useState('')
    const doLogin = async(event)=> {
        event.preventDefault()
        setErrorMessage('')
        try{
            const {value: email} = event.target.email
            const {value: password} = event.target.password
            const body = new URLSearchParams({email, password}).toString()
            const {data} = await http().post('http://localhost:8888/auth/login')
            window.localStorage.setItem('token', data.results.token)
            setToken(data.resluts.token)
        }catch(err){
            const message = err?.response.data.message
            if(message){
                setErrorMessage(message)
            }
        }

    }
    React.useEffect(() =>{
        if(token){
            navigate('/')
        }
    }, [token, navigate])

    return (
        <div className="flex h-screen">
            <div className="hidden md:flex flex-1 bg-orange-400"></div>
            <div className="max-w-md w-full flex justify-center items-center">
                <form onSubmit={doLogin} className="w-[80%] flex flex-col gap-5">
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
                    <div>
                        <input placeholder="Email" className="input input-bordered w-full" type="email" name="email" />
                    </div>
                    <div>
                        <input placeholder="password" className="input input-bordered w-full" type="password" name="password" />
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
                            <FcGoogle size={25}/>
                        </button>
                        <button className='btn btn-secondary bg-white border-primary hover:border-primary hover:bg-primary w-24'>
                        <FaFacebook color='#4267B2' size={25}/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;