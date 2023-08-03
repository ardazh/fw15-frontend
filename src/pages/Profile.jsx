import Header from "../components/Header"
import Footer from "../components/Footer"
import React from "react"
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import http from "../helpers/http"
import { Formik, Field } from "formik"
import moment from "moment"
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import Sidebar from "../components/Sidebar"

import defaultProfile from "../assets/img/default.jpg"
import { setDataProfile } from "../redux/reducers/profile"
import { Helmet } from "react-helmet"

const Profile = () => {
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch()
  const profile = useSelector(state => state.profile.dataProfile)
  // const [profile, setProfile] = React.useState({})
  const [editEmail, setEditEmail] = React.useState(false)
  const [editPhonenumber, setEditPhonenumber] = React.useState(false)
  const [editBirthdate, setEditBirthdate] = React.useState(false)
  const [selectedPicture, setSelectedPicture] = React.useState(false)
  const [openModal, setOpenModal] = React.useState(false)
  const [pictureURI, setPictureURI] = React.useState("")


  // React.useEffect(() => {
  //   const getProfile = async () => {
  //     const { data } = await http(token).get("/profile")
  //     setProfile(data.results)
  //   }
  //   getProfile()
  // }, [token])

  React.useEffect(() => {
    console.log(selectedPicture)
  }, [selectedPicture])

  const fileToDataUrl = (file) =>{
    const reader = new FileReader()
    reader.addEventListener("load",() => {
      setPictureURI(reader.result)
    })
    reader.readAsDataURL(file)
  }

  const changePicture = (e)=> {
    const file = (e.target.files[0])
    setSelectedPicture(file)
    fileToDataUrl(file)
  }

  const editProfile = async (values) =>{
    setOpenModal(true)
    const form = new FormData()
    Object.keys(values).forEach((key) =>{
      if(values[key]){
        if(key === "birthDate"){
          form.append(key, moment(values[key]).format("YYYY-MM-DD"))
        }else{
          form.append(key, values[key])
        }
      }
    })
    if(selectedPicture){
      form.append("picture", selectedPicture)
    }
    const {data} = await http(token).patch("/profile", form, {
      headers: {
        "Contenct-Type": "multipart/form-data"
      }
    })
    dispatch(setDataProfile(data.results))
    setEditEmail(false)
    setEditPhonenumber(false)
    setEditBirthdate(false)
    setSelectedPicture(false)
    setOpenModal(false)

  }

  return (
    <>
      <div>
        <Helmet>
          <title>Profile | OnceTicket</title>
        </Helmet>
      </div>
      <div className='bg-[#F4F7FF]'>
        <div>
          <Header />
        </div>
        <div className='flex min-h-screen'>
          <Sidebar/>
          <div className='p-8 w-full'>
            <Formik
              initialValues={{
                fullName: profile?.fullName,
                email: profile?.email,
                phoneNumber: profile?.phoneNumber,
                gender: profile?.gender === "1" ? "1" : "2",
                profession: profile?.profession,
                nationality: profile?.nationality,
                birthDate: profile?.birthDate 
              }}
              onSubmit={editProfile}
              enableReinitialize={true}
            >
              {({handleSubmit, values, handleChange, handleBlur}) => (
                <form onSubmit={handleSubmit} className='flex bg-white p-8 rounded-md w-full'>
                  <div className='flex-1 pr-20 flex flex-col gap-2'>
                    <div className='text-2xl font-bold mb-5 w-[150px]'>Profile</div>
                    <div className='flex'>
                      <div className='w-[150px] flex items-center'>Name</div>
                      <div className='flex-1'>
                        <input name='fullName' onChange={handleChange} onBlur={handleBlur} value={values.fullName} className='input input-bordered w-full' type='text' />
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='w-[150px] flex items-center'>Email</div>
                      <div className='flex gap-3 flex-1'>
                        {!editEmail && <span>{profile?.email === null ? <span className='text-red-400'>Not Set</span>: profile?.email}</span>}
                        {editEmail && <input type='email' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} className='input input-bordered w-full' />}
                        {!editEmail && <div>
                          <button onClick={()=>setEditEmail(true)} className='text-primary font-bold'>Edit</button>
                        </div>}
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='w-[150px] flex items-center'>Phone Number</div>
                      <div className='flex gap-3 flex-1'>
                        {!editPhonenumber && <span>{profile?.phoneNumber === null ? <span className='text-red-400'>Not Set</span>: profile?.phoneNumber}</span>}
                        {editPhonenumber && <input type='text' name='phoneNumber' onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber} className='input input-bordered w-full' />}
                        {!editPhonenumber && <div>
                          <button onClick={()=>setEditPhonenumber(true)} className='text-primary font-bold'>Edit</button>
                        </div>}
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='w-[150px] flex items-center'>Gender</div>
                      <div className='flex-1 flex gap-5'>
                        <label className='flex gap-2 items-center'>
                          <Field name='gender' value='1' type='radio' className='radio radio-primary' />
                          <span>Male</span>
                        </label>
                        <label className='flex gap-2 items-center'>
                          <Field name='gender' value='2' type='radio' className='radio radio-primary' />
                          <span>Female</span>
                        </label>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='w-[150px] flex items-center'>Profession</div>
                      <div className='flex-1'>
                        <select name='profession' onChange={handleChange} onBlur={handleBlur} value={values.profession} className='select select-bordered w-full'>
                          <option>Entrepreneur</option>
                        </select>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='w-[150px] flex items-center'>Nationality</div>
                      <div className='flex-1'>
                        <select name='nationality' onChange={handleChange} onBlur={handleBlur} value={values.nationality} className='select select-bordered w-full'>
                          <option>Indonesia</option>
                        </select>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='w-[150px] flex items-center'>Birthdate</div>
                      <div className='flex gap-3 flex-1'>
                        {!editBirthdate && <span>{profile?.birthDate === null ? <span className='text-red-400'>Not set</span> : moment(profile?.birthDate).format("DD/MM/YYYY")}</span>}
                        {editBirthdate && (
                          <input name='birthDate' onChange={handleChange} onBlur={handleBlur} value={values.birthDate} type='date' className='input input-bordered w-full px-3 h-[55px] border-secondary' />
                        )}

                        {!editBirthdate && (
                          <div>
                            <button onClick={() => setEditBirthdate(true)} className='text-primary font-semibold text-sm'>
                            edit
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='flex'>
                      <button className='btn btn-primary max-w-[315px] w-full' type='submit'>Save</button>
                    </div>
                  </div>
                  <div className='w-[358px] flex flex-col gap-5 items-center pt-16'>
                    <div className='rounded-full p-[13px] border-[4px] border-black w-[137px] h-[137px]'>
                      <div className='w-full h-full rounded-full overflow-hidden'>
                        {!selectedPicture && <img className='w-full h-full object-cover' src={
                          profile?.picture?.startsWith("https")? 
                            profile?.picture : 
                            (
                              profile?.picture === null ? 
                                defaultProfile : 
                                `http://${import.meta.env.VITE_BACKEND_URL}/
                                uploads/${profile?.picture}`
                            )} alt='profile' />}
                        {selectedPicture && <div className='w-full h-full relative'><img className='w-full h-full object-cover' src={pictureURI} alt='profile' />
                          <div className='absolute bg-gray-400 w-full h-full top-0 left-0 opacity-50 text-white flex justify-center items-center'></div>
                        </div>
                        }
                      </div>
                    </div>
                    <div>
                      <label className='btn btn-primary'>
                        <span>Choose Photo</span>
                        <input name='picture' onChange={changePicture} className='hidden' type='file' />
                      </label>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div>
          <Footer />
        </div>
        <input type='checkbox' id='loading' className='modal-toggle' checked={openModal} />
        <div className='modal'>
          <div className='modal-box bg-transparent shadow-none'>
            <div className='flex justify-center'>
              <AiOutlineLoading3Quarters className='animate-spin' color='white' size={80} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
