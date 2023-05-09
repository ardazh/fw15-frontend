import {Link} from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'

const Login = ()=> {
    return (
        <div className="flex h-screen">
            <div className="hidden md:flex flex-1 bg-orange-400"></div>
            <div className="max-w-md w-full flex justify-center items-center">
                <form className="w-[80%] flex flex-col gap-5">
                    <div>
                        WeTick
                    </div>
                    <div>
                        Sign In
                    </div>
                    <div>
                        Hi, Welcome back to Urticket!
                    </div>
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