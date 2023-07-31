import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import { useSelector } from "react-redux"
import React from "react"
import http from "../helpers/http"
import { FiEyeOff, FiEye } from "react-icons/fi"

const ChangePassword = () => {
  const token = useSelector(state => state.auth.token)
  const [errorMessage, setErrorMessage] = React.useState("")
  const [successMessage, setSuccessMessage] = React.useState("")
  const [eyeIcon, setEyeIcon] = React.useState(false)
  const [inputOldPassword, setInputOldPassword] = React.useState(false)
  const [eyeIconNewPass, setEyeIconNewPass] = React.useState(false) 
  const [inputNewPassword, setInputNewPassword] =  React.useState(false)
  const [eyeIconConfPass, setEyeIconConfPass] = React.useState(false)
  const [inputConfirmPassword, setInputConfirmPassword] = React.useState(false)

  const handleOldPassword = () => {
    setEyeIcon(!inputOldPassword)
    setInputOldPassword(!eyeIcon)
  }

  const handleNewPassword = () => {
    setEyeIconNewPass(!inputNewPassword)
    setInputNewPassword(!eyeIconNewPass)
  }

  const handelConfirmPassword = () => {
    setEyeIconConfPass(!inputConfirmPassword)
    setInputConfirmPassword(!eyeIconConfPass)
  }

  const doChangePassword = async (change) => {
    change.preventDefault()
    setErrorMessage("")
    try{
      const {value: oldPassword} = change.target.oldPassword
      const {value: newPassword} = change.target.newPassword
      const {value: confirmPassword} = change.target.confirmPassword
      const body = new URLSearchParams({oldPassword, newPassword, confirmPassword}).toString()
      const {data} = await http(token).post("/change-password", body)

      setSuccessMessage(data.message)
      if(data.message) {
        setEyeIcon(!inputOldPassword)
        setInputOldPassword(!eyeIcon)
        setEyeIconNewPass(!inputNewPassword)
        setInputNewPassword(!eyeIconNewPass)
        eyeIconConfPass(!inputConfirmPassword)
        setInputConfirmPassword(!eyeIconConfPass)
        setTimeout(() => {
          setSuccessMessage("")
        }, 2000)
      }
    }catch(error){
      const message = error?.response?.data?.message
      setErrorMessage(message)
    }
  }
  return (
    <>
      <div>
        <Header />
      </div>
      <div className='flex gap-3'>
        <Sidebar />
        <main className='flex-1 my-12 text-sm'>
          <div className='bg-gray-400 px-12 py-11 rounded-2xl mr-16 h-[750px]'>
            <div className='font-bold tracking-wider mb-12 text-2xl'>Change Password</div>
            <form onSubmit={doChangePassword} className='flex flex-col gap-8'>
              {errorMessage && <div>{errorMessage}</div>}
              {successMessage && <div>{successMessage}</div>}
              <div className='flex items-center gap-16'>
                <label className='w-40'>Old Password</label>
                <div className='w-full form-control text-sm tracking[0.5] relative'>
                  <input
                    className={"input input-bordered w-full h-14 px-3 outline-[#C1C5D0] border-2 rounded-xl text-secondary"}
                    type={inputOldPassword ? "text" : "password"}
                    name='oldPassword'
                    placeholder='Old Password'
                  />

                  <button type='button' onClick={handleOldPassword} className='absolute top-[18px] right-4 text-[#FD841F]'>
                    {eyeIcon ? (
                      <i className=''>
                        <FiEyeOff size={20} />
                      </i>
                    ) : (
                      <i className=''>
                        <FiEye size={20} />
                      </i>
                    )}
                  </button>
                </div>
              </div>
              <div className='flex items-center gap-16'>
                <label className='w-40'>New Password</label>
                <div className='w-full form-control text-sm tracking[0.5] relative'>
                  <input
                    className={"input input-bordered w-full h-14 px-3 outline-[#C1C5D0] border-2 rounded-xl text-secondary"}
                    type={inputNewPassword ? "text" : "password"}
                    name='newPassword'
                    placeholder='New Password'
                  />

                  <button type='button' onClick={handleNewPassword} className='absolute top-[18px] right-4 text-[#FD841F]'>
                    {eyeIconNewPass ? (
                      <i className=''>
                        <FiEyeOff size={20} />
                      </i>
                    ) : (
                      <i className=''>
                        <FiEye size={20} />
                      </i>
                    )}
                  </button>
                </div>
              </div>
              <div className='flex items-center gap-16'>
                <label className='w-40'>Confirm Password</label>
                <div className='w-full form-control text-sm tracking[0.5] relative'>
                  <input
                    className={"input input-bordered w-full h-14 px-3 outline-[#C1C5D0] border-2 rounded-xl text-secondary"}
                    type={inputConfirmPassword ? "text" : "password"}
                    name='confirmPassword'
                    placeholder='Confirm Password'
                  />

                  <button type='button' onClick={handelConfirmPassword} className='absolute top-[18px] right-4 text-[#FD841F]'>
                    {eyeIconConfPass ? (
                      <i className=''>
                        <FiEyeOff size={20} />
                      </i>
                    ) : (
                      <i className=''>
                        <FiEye size={20} />
                      </i>
                    )}
                  </button>
                </div>
              </div>
              <div>
                <button type='submit' className='bg-[#FD841F] h-14 w-full rounded-2xl text-white shadow-lg shadow-orange-500/50'>Update</button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default ChangePassword
