const ForgotPassword = ()=> {
    return (
        <div className="flex h-screen">
            <div className="hidden md:flex flex-1 bg-orange-400"></div>
            <div className="max-w-md w-full flex justify-center items-center">
                <form className="w-[80%] flex flex-col gap-5">
                    <div>
                        WeTick
                    </div>
                    <div>
                        Forgot Password
                    </div>
                    <div>
                        You’ll get mail soon on your email
                    </div>
                    <div>
                        <input placeholder="Email" className="input input-bordered w-full" type="email" name="email" />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-block">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;