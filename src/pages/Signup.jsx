const Signup = ()=> {
    return (
        <div className="flex h-screen">
        <div className="hidden md:flex flex-1 bg-orange-400"></div>
        <div className="max-w-md w-full flex justify-center items-center">
            <form className="w-[80%] flex flex-col gap-5">
                <div>
                    WeTick
                </div>
                <div>
                    Sign Up
                </div>
                <div>
                    Already have an account? Log In
                </div>
                <div>
                    <input placeholder="Full Name" className="input input-bordered w-full" type="text" name="text" />
                </div>
                <div>
                    <input placeholder="Email" className="input input-bordered w-full" type="email" name="email" />
                </div>
                <div>
                    <input placeholder="Password" className="input input-bordered w-full" type="password" name="password" />
                </div>
                <div>
                    <input placeholder="Confirm Password" className="input input-bordered w-full" type="password" name="password" />
                </div>
                <div className="flex gap-3">
                    <div>
                       <input type="checkbox" /> 
                    </div>
                    <div>
                        Accept terms and condition
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Signup;