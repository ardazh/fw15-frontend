import { Link } from 'react-router-dom'
import logo from '../assets/img/logo-wetick.png'
import picture from '../assets/img/picture.png'

const Signup = ()=> {
    return (
        <div className='flex h-screen'>
            <div className='hidden md:flex flex-1 bg-primary'>
                <div className='flex justify-center items-center'>
                    <img src={picture} />
                </div>
            </div>
            <div className='max-w-md w-full flex justify-center items-center'>
                <form className='w-[80%] flex flex-col gap-5'>
                    <Link to='/' className='flex text-2xl'>
                        <img src={logo} alt='Logo Wetick' />
                        <span className='flex items-center text-[#E14D2A]'>
                            we
                        </span>
                        <span className='flex items-center text-[#48E0E4]'>
                            tick
                        </span>
                    </Link>
                    <div className='text-lg text-black'>
                    Sign Up
                    </div>
                    <div className='text-[10px] text-black'>
                    Already have an account? Log In
                    </div>
                    <div>
                        <input placeholder='Full Name' className='input input-bordered w-full' type='text' name='text' />
                    </div>
                    <div>
                        <input placeholder='Email' className='input input-bordered w-full' type='email' name='email' />
                    </div>
                    <div>
                        <input placeholder='Password' className='input input-bordered w-full' type='password' name='password' />
                    </div>
                    <div>
                        <input placeholder='Confirm Password' className='input input-bordered w-full' type='password' name='password' />
                    </div>
                    <div className='flex gap-3'>
                        <div>
                            <input type='checkbox' /> 
                        </div>
                        <div>
                        Accept terms and condition
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-secondary text-white w-[215px] hover:btn-primary'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup