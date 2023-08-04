import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import { useSelector } from "react-redux"
import React from "react"
import http from "../helpers/http"
import moment from "moment/moment"
import { Formik } from "formik"
import * as Yup from "yup"
import { AiOutlineCloseCircle, AiOutlineLoading3Quarters, AiOutlinePicture } from "react-icons/ai"
import { Helmet } from "react-helmet"
import Image from "../components/Image"
import defaultImage from "../assets/img/Once-ticket.png"

const validationSchema = Yup.object({
  title: Yup.string().required("Title is Required!"),
  cityId: Yup.string().required("City is Required!"),
  categoryId: Yup.string().required("Category is Required!"),
  date: Yup.string().required("Date is Required!"),
  descriptions: Yup.string().required("Descriptions is Required!")
})
const validationSchemaUpdate = Yup.object({
  title: Yup.string().required("Title is Required!"),
  descriptions: Yup.string().required("Descriptions is Required!")
})

const ManageEvents = () => {
  const [userEvents, setUserEvents] = React.useState([])
  const [detailUserEvents, setDetailUserEvents] = React.useState({})
  const [locations, setLocations] = React.useState([])
  const [categories, setCategories] = React.useState([])
  const [selectedPicture, setSelectedPicture] = React.useState(false)
  const [pictureURI, setPictureURI] = React.useState("")
  const [pictureErr, setPictureErr] = React.useState(true)
  const token = useSelector(state => state.auth.token)
  const [selectedEventId, setSelectedEventId] = React.useState(null)
  const [openModal, setOpenModal] = React.useState(false)
  const [openModalEvent, setOpenModalEvent] = React.useState(false)
  const [modalAction, setModalAction] = React.useState("")
  const [editDate, setEditDate] = React.useState(false)


  React.useEffect(() => {
    async function getUserEvents(){
      const {data} = await http(token).get("/events/manage?limit=3&sortBy=desc")
      setUserEvents(data.results)
    }
    if(token){
      getUserEvents()
    }
  }, [token, setUserEvents])

  React.useEffect(() => {
    async function getLocation(){
      const {data} = await http(token).get("/city")
      setLocations(data.results)
    }
    if(token){
      getLocation()
    }
  },[token, setLocations])

  React.useEffect(() => {
    async function getCategories(){
      const {data} = await http(token).get("/category")
      setCategories(data.results)
    }
    if(token){
      getCategories()
    }
  },[token, setCategories])

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

  const updateEventList = React.useCallback(async () => {
    const { data } = await http(token).get("/events/manage?limit=3&sortBy=desc")
    setUserEvents(data.results)
  }, [token])

  const handleModalEvent = async (paramId, action) => {
    setSelectedEventId(paramId)
    setModalAction(action)
    setOpenModalEvent(true)
    if (action === "detail" || action === "update") {
      const {data} = await http(token).get(`/events/manage/${paramId}`)
      setDetailUserEvents(data.results)
    }
  }

  const handleCloseModalEvent = () => {
    setModalAction("")
    setSelectedEventId(null)
    setOpenModalEvent(false)
    setDetailUserEvents({})
    setSelectedEventId(false)
    setEditDate(false)
    setSelectedPicture(false)
  }

  const handleDeleteEvent = async () => {
    setOpenModal(true)
    if(selectedEventId) {
      await http(token).delete(`/events/manage/${selectedEventId}`)
      updateEventList()
      setModalAction("")
      setSelectedEventId(null)
      setOpenModalEvent(false)
      setOpenModal(false)
    }
  }

  const createEvent = async (values, { resetForm }) => {
    setOpenModal(true)
    if (!selectedPicture) {
      setOpenModal(false)
      setPictureErr(false)
      return
    } else {
      setPictureErr(true)
    }
    const form = new FormData()
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        if (key === "date") {
          form.append(key, moment(values[key]).format("YYYY-MM-DD"))
        } else {
          form.append(key, values[key])
        }
      }
    })
    if (selectedPicture) {
      form.append("picture", selectedPicture)
    }

    await http(token).post("/events/manage", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    updateEventList()
    setModalAction("")
    setSelectedEventId(null)
    setOpenModalEvent(false)
    setDetailUserEvents({})
    setSelectedPicture(false)
    setEditDate(false)
    setOpenModal(false)
    resetForm()
  }

  const updateEvent = async(values, {resetForm}) => {
    setOpenModal(true)
    const form  = new FormData()
    Object.keys(values).forEach((key) => {
      if(values[key]){
        if(key === "date") {
          form.append(key, moment(values[key]).format("YYYY-MM-DD"))
        } else{
          form.append(key, values[key])
        }
      }
    })
    if (selectedPicture) {
      form.append("picture", selectedPicture)
    }
    await http(token).patch(`/events/manage/${selectedEventId}`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    updateEventList()
    setModalAction("")
    setSelectedEventId(null)
    setOpenModalEvent(false)
    setDetailUserEvents({})
    setSelectedPicture(false)
    setEditDate(false)
    setOpenModal(false)
    resetForm()
  }

  return (
    <>
      <div>
        <Helmet>
          <title>Manage Event | OnceTicket</title>
        </Helmet>
      </div>
      <div className='bg-[#F4F7FF]'>
        <div>
          <Header />
        </div>
        <div className='flex'>
          <Sidebar />
          <main className='flex-1 my-12 text-sm'>
            <div className='bg-white px-12 py-11 rounded-2xl mr-16 h-[750px]'>
              <div className='flex justify-between'>
                <div className='font-bold tracking-wider mb-12 text-xl'>Manage Events</div>
                <div className=''>
                  {/* The button to open modal */}
                  <button onClick={() => handleModalEvent("", "create")}>create</button>
                  {/* <label htmlFor='my_modal_6' className='btn bg-[#fff] hover:bg-[#fff] hover:border-primary w-full h-10 rounded-xl border-2 border-secondary text-secondary text-sm font-semibold tracking-[1px] mb-4'>Create</label> */}
                  {/* Put this part before </body> tag */}
                  {/* <input type='checkbox' id='my_modal_6' className='modal-toggle' checked={openModalEvent} onChange={() => setOpenModalEvent(!openModalEvent)} /> */}

          
                </div>
                <input type='checkbox' id='my_modal_6' className='modal-toggle' checked={openModalEvent} onChange={() => setOpenModalEvent(!openModalEvent)}  />
                <div className='modal'>
                  <div className={`modal-box mx-4 w-full md:w-[90%] ${modalAction !== "delete" ? "lg:max-w-[900px]" : "lg:max-w-[600px]"}  bg-white`}>
                    <div className='flex justify-between items-center'>
                      <div className='text-[20px] text-[#373a42] font-semibold tracking-[1px]'>
                        {modalAction === "create" && "Create Event"}
                        {modalAction === "detail" && "Detail Event"}
                        {modalAction === "update" && "Edit Event"}
                        {modalAction === "delete" && "Are you sure want to delete this event ?"}
                      </div>
                      <div>
                        {modalAction !== "delete" ? (
                          <button className='' onClick={handleCloseModalEvent}>
                            <i className='text-red-400'>
                              <AiOutlineCloseCircle size={30} />
                            </i>
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    {
                      modalAction === "create" && (
                        <div className='w-[80%] flex flex-col gap-5'>
                          <div className='text-lg text-black'>
                    Create Event
                          </div>
                          <Formik
                            initialValues={{
                              title: "",
                              cityId: "",
                              categoryId: "",
                              date: "",
                              descriptions: ""
                            }}
                            validationSchema={validationSchema}
                            onSubmit={createEvent}
                            enableReinitialize={true}
                          >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                              <form onSubmit={handleSubmit}>
                                <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-9'>
                                  <div className='flex items-start w-full flex-1'>
                                    <div className='flex flex-col gap-3.5 w-full'>
                                      <div className='flex flex-col align-start justify-start gap-3.5 w-full'>
                                        <div className='text-sm text-[#373a42] tracking-[1px]'>Name</div>
                                        <div className='w-full'>
                                          <input
                                            name='title'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.title}
                                            type='text'    
                                            className='input input-bordered w-full px-3 h-[55px] border-secondary text-secondary capitalize'
                                            placeholder='Input Name Event. .' />
                                        </div>
                                        {errors.title && touched.title && (
                                          <label htmlFor='title' className='label'>
                                            <span className='label-text-alt text-error'>{errors.title}</span>
                                          </label>
                                        )}
                                      </div>
                                      <div className='flex flex-col align-start justify-start gap-3.5 w-full'>
                                        <div className='text-sm text-[#373a42] tracking-[1px]'>Location</div>
                                        <div className='w-full'>
                                          <select
                                            name='cityId'
                                            onChange={handleChange}
                                            onBlur={handleBlur}  
                                            className='select select-bordered w-full px-3 h-[55px] border-secondary text-secondary capitalize'
                                          >
                                            {locations.map((place) => {
                                              return(
                                                <React.Fragment key={`location-${place.id}`}>
                                                  <option className='hidden'>Select Locations</option>
                                                  <option className='text-secondary capitalize' value={place.id}>
                                                    {place.name}
                                                  </option>
                                                </React.Fragment>
                                              )
                                            })}
                                          </select>
                                        </div>
                                        {errors.title && touched.title && (
                                          <label htmlFor='title' className='label'>
                                            <span className='label-text-alt text-error'>{errors}</span>
                                          </label>
                                        )}
                                      </div>
                                      <div className='flex flex-col align-start justify-start gap-3.5 w-full'>
                                        <div className='text-sm text-[#373a42] tracking-[1px]'>Category</div>
                                        <div className='w-full'>
                                          <select
                                            name='categoryId'
                                            onChange={handleChange}
                                            onBlur={handleBlur}  
                                            className='select select-bordered w-full px-3 h-[55px] border-secondary text-secondary capitalize'
                                          >
                                            {categories.map((item) => {
                                              return(
                                                <React.Fragment key={`location-${item.id}`}>
                                                  <option className='hidden'>Select Category</option>
                                                  <option className='text-secondary capitalize' value={item.id}>
                                                    {item.name}
                                                  </option>
                                                </React.Fragment>
                                              )
                                            })}
                                          </select>
                                        </div>
                                        {errors.title && touched.title && (
                                          <label htmlFor='title' className='label'>
                                            <span className='label-text-alt text-error'>{errors}</span>
                                          </label>
                                        )}
                                      </div>
                                      <div className='flex flex-col align-start justify-start gap-3.5 w-full'>
                                        <div className='text-sm text-[#373a42] tracking-[1px]'>Date Time Show</div>
                                        <div className='w-full'>
                                          <input
                                            name='date'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.date}
                                            type='date'    
                                            className='input input-bordered w-full px-3 h-[55px] border-secondary text-secondary capitalize'
                                          />
                                        </div>
                                        {errors.title && touched.title && (
                                          <label htmlFor='title' className='label'>
                                            <span className='label-text-alt text-error'>{errors.date}</span>
                                          </label>
                                        )}
                                      </div>
                                      <div className='flex items-start w-full flex-1'>
                                        <div className='flex flex-col gap-3.5 w-full justify-center items-center'>
                                          {!selectedPicture && (
                                            <div className='w-[291px] h-[332px] rounded-xl relative flex justify-center items-center'>
                                              <i className=''>
                                                <AiOutlinePicture size={50} />
                                              </i>
                                              <div className='absolute bg-white border-2 rounded-xl border-secondary w-full h-full top-0 left-0 opacity-50 text-white flex justify-center items-center'></div>
                                            </div>
                                          )}
                                          {selectedPicture && (
                                            <div className='w-[291px] h-[352px] relative overflow-hidden rounded-xl'>
                                              <img className='w-[291px] h-[353px] rounded-xl object-cover border-4 border-white' src={pictureURI} alt='profile' />
                                              <div className='absolute bg-gray-400 w-full h-full top-0 left-0 opacity-50 text-white flex justify-center items-center'></div>
                                            </div>
                                          )}
                                          <div className='w-[291px] flex flex-col justify-center'>
                                            <label className='btn bg-[#fff] w-full h-10 rounded-xl border-2 border-secondary text-primary hover:bg-secondary hover:border-primary text-sm font-semibold tracking-[1px] mb-4'>
                                              <span>Choose photo</span>
                                              <input name='picture' onChange={changePicture} className='hidden' type='file' />
                                            </label>
                                            {!pictureErr && (
                                              <label className='label'>
                                                <span className='label-text-alt text-error'>Please insert event picture!</span>
                                              </label>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='text-[20px] text-[#373a42] tracking-[1px] mt-11'>
                                  <div className='text-sm text-[#373a42] tracking-[1px] mb-3'>Detail</div>
                                  <div className='w-full'>
                                    <textarea 
                                      name='descriptions'
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.descriptions}
                                      className='border-2 w-full rounded-xl text-sm tracking-[1px] px-3.5 py-3.5'
                                      cols='30'
                                      rows='3'
                                      placeholder='Input Detail. .'></textarea>
                                  </div>
                                  {errors.descriptions && touched.descriptions && (
                                    <label htmlFor='descriptions' className='label'>
                                      <span className='label-text-alt text-error'>{errors.descriptions}</span>
                                    </label>
                                  )}
                                </div>
                                <div className='w-full flex items-center justify-end mt-11'>
                                  <button className='shadow-for-all-button w-[315px] h-[55px] rounded-xl bg-secondary text-white text-sm font-semibold tracking-[1px]' type='submit'>
                            Save
                                  </button>
                                </div>
                              </form>
                            )}
                          </Formik>
                        </div>
                      )
                    }

                    {modalAction === "detail" && (
                      <div>
                        <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-9'>
                          <div className='flex items-start w-full flex-1'>
                            <div className='flex flex-col gap-3.5 w-full'>
                              <div className='flex flex-col align-start justify-start gap-3.5 w-full'>
                                <div className='text-sm text-[#373a42] tracking-[1px]'>Name</div>
                                <div className='w-full text-lg font-semibold text-secondary capitalize'>{detailUserEvents?.title}</div>
                              </div>
                              <div className='flex flex-col align-start justify-start gap-3.5 w-full'>
                                <div className='text-sm text-[#373a42] tracking-[1px]'>Location</div>
                                <div className='w-full'>
                                  <div className='w-full text-lg font-semibold text-secondary capitalize'>{detailUserEvents?.location}</div>
                                </div>
                              </div>
                              <div className='flex flex-col align-start justify-start gap-3.5 w-full'>
                                <div className='text-sm text-[#373a42] tracking-[1px]'>Category</div>
                                <div className='w-full'>
                                  <div className='w-full text-lg font-semibold text-secondary capitalize'>{detailUserEvents?.eventCategory}</div>
                                </div>
                              </div>
                              <div className='flex flex-col align-start justify-start gap-3.5 w-full'>
                                <div className='text-sm  tracking-[1px] text-[#373a42] capitalize'>Date Time Show</div>
                                <div className='w-full'>
                                  <div className='w-full text-lg font-semibold text-[#373a42] capitalize'>{moment(detailUserEvents?.date).format("LLLL")}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex items-start w-full flex-1'>
                            <div className='flex flex-col gap-3.5 w-full justify-center items-center'>
                              {detailUserEvents && (
                                <div className='w-[291px] h-[352px] relative overflow-hidden rounded-xl'>
                                  <img
                                    className='w-full h-full border-4 border-white rounded-xl object-cover'
                                    src={detailUserEvents?.picture}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className='text-[20px] text-[#373a42] font-semibold tracking-[1px] mt-11'>
                          <div className='text-sm text-[#373a42] tracking-[1px] mb-3'>Detail</div>
                          <div className='w-full'>
                            <div className='w-full text-lg font-semibold text-secondary capitalize'>{detailUserEvents?.descriptions}</div>
                          </div>
                        </div>
                        {/* <div className='w-full flex items-center justify-center md:justify-end mt-11'>
                        <button onClick={handleCloseModalEvent} className='shadow-for-all-button w-[315px] h-[55px] rounded-xl bg-[#4c3f91] text-white text-sm font-semibold tracking-[1px]' type='button'>
                            Close
                        </button>
                      </div> */}
                      </div>
                    )}

                    {modalAction === "update" && (
                      <Formik
                        initialValues={{
                          title: detailUserEvents?.title,
                          cityId: detailUserEvents?.cityId,
                          categoryId: detailUserEvents?.categoryId,
                          date: detailUserEvents?.date,
                          descriptions: detailUserEvents?.descriptions,
                        }}
                        validationSchema={validationSchemaUpdate}
                        onSubmit={updateEvent}
                        enableReinitialize={true}
                      >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                          <form onSubmit={handleSubmit}>
                            <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-9'>
                              <div className='flex items-start w-full flex-1'>
                                <div className='flex flex-col gap-3.5 w-full'>
                                  <div className='flex flex-col align-start justify-start gap-3.5 w-full'>
                                    <div className='text-sm text-[#373a42] tracking-[1px]'>Name</div>
                                    <div className='w-full'>
                                      <input
                                        name='title'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                        type='text'
                                        className='input input-bordered w-full px-3 h-[55px] border-secondary text-secondary capitalize'
                                        placeholder='Title'
                                      />
                                    </div>
                                    {errors.title && touched.title && (
                                      <label htmlFor='title' className='label'>
                                        <span className='label-text-alt text-error'>{errors.title}</span>
                                      </label>
                                    )}
                                  </div>
                                  <div className='flex flex-col align-start justify-start gap-3.5 w-full'>
                                    <div className='text-sm text-[#373a42] tracking-[1px]'>Location</div>
                                    <div className='w-full'>
                                      <select
                                        name='cityId'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className='select select-bordered w-full px-3 h-[55px] border-secondary text-secondary capitalize'
                                        value={values.location}
                                      >
                                        <option className='hidden'>{detailUserEvents?.location}</option>
                                        {locations.map((item) => {
                                          return (
                                            <React.Fragment key={`location-${item.id}`}>
                                              <option className='text-[#373a42] capitalize' value={item.id}>
                                                {item.name}
                                              </option>
                                            </React.Fragment>
                                          )
                                        })}
                                      </select>
                                    </div>
                                    {errors.cityId && touched.cityId && (
                                      <label htmlFor='cityId' className='label'>
                                        <span className='label-text-alt text-error'>{errors.cityId}</span>
                                      </label>
                                    )}
                                  </div>

                                  <div className='flex flex-col align-start justify-start gap-3.5 w-full'>
                                    <div className='text-sm text-[#373a42] tracking-[1px]'>Category</div>
                                    <div className='w-full'>
                                      <select
                                        name='categoryId'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className='select select-bordered w-full px-3 h-[55px] border-secondary text-secondary capitalize'
                                        value={values.categoryId}
                                      >
                                        <option className='hidden'>{detailUserEvents?.eventCategory}</option>
                                        {categories.map((item) => {
                                          return (
                                            <React.Fragment key={`location-${item.id}`}>
                                              <option className='text-[#373a42] capitalize' value={item.id}>
                                                {item.name}
                                              </option>
                                            </React.Fragment>
                                          )
                                        })}
                                      </select>
                                    </div>
                                    {errors.categoryId && touched.categoryId && (
                                      <label htmlFor='categoryId' className='label'>
                                        <span className='label-text-alt text-error'>{errors.categoryId}</span>
                                      </label>
                                    )}
                                  </div>
                                  <div className='flex flex-col align-start justify-start gap-3.5 w-full'>
                                    <div className='text-sm  tracking-[1px] text-[#373a42] capitalize'>Date Time Show</div>
                                    <div className='w-full flex items-center justify-between'>
                                      {!editDate && (
                                        <span className='text-secondary'>
                                          {detailUserEvents?.date === null ? <span className='text-red-400'>Not set</span> : moment(detailUserEvents?.date).format("DD/MM/YYYY")}
                                        </span>
                                      )}

                                      {editDate && (
                                        <input
                                          name='date'
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.date}
                                          type='date'
                                          className='input input-bordered w-full px-3 h-[55px] border-secondary'
                                        />
                                      )}
                                      {!editDate && (
                                        <div>
                                          <button onClick={() => setEditDate(true)} className='text-primary font-semibold text-sm'>
                                          edit
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                    {errors.date && touched.date && (
                                      <label htmlFor='date' className='label'>
                                        <span className='label-text-alt text-error'>{errors.date}</span>
                                      </label>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className='flex items-start w-full flex-1'>
                                <div className='flex flex-col gap-3.5 w-full justify-center items-center'>
                                  {!selectedPicture && (
                                    <div className='w-[291px] h-[332px] rounded-xl relative flex justify-center items-center'>
                                      <Image className='w-full h-full border-4 border-white rounded-xl object-cover' src={detailUserEvents?.picture || null} defaultImg={defaultImage} />
                                    </div>
                                  )}
                                  {selectedPicture && (
                                    <div className='w-[291px] h-[352px] relative overflow-hidden rounded-xl'>
                                      <img className='w-[291px] h-[353px] rounded-xl object-cover border-4 border-white' src={pictureURI} alt='profile' />
                                      <div className='absolute bg-gray-400 w-full h-full top-0 left-0 opacity-50 text-white flex justify-center items-center'></div>
                                    </div>
                                  )}
                                  <div className='w-[291px] flex flex-col justify-center'>
                                    <label className='btn bg-[#fff] w-full h-10 rounded-xl border-2 border-secondary text-secondary text-sm font-semibold tracking-[1px] mb-4 hover:bg-orange-200 hover:border-orange-200'>
                                      <span>Choose photo</span>
                                      <input name='picture' onChange={changePicture} className='hidden' type='file' />
                                    </label>
                                    {!pictureErr && (
                                      <label className='label'>
                                        <span className='label-text-alt text-error'>Please insert event picture!</span>
                                      </label>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='text-[20px] text-[#373a42] font-semibold tracking-[1px] mt-11'>
                              <div className='text-sm text-[#373a42] tracking-[1px] mb-3'>Detail</div>
                              <div className='w-full'>
                                <textarea
                                  name='descriptions'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.descriptions}
                                  className='border-2 w-full rounded-xl text-sm tracking-[1px] px-3.5 py-3.5'
                                  cols='30'
                                  rows='3'
                                  placeholder='Input Detail'
                                ></textarea>
                              </div>
                              {errors.descriptions && touched.descriptions && (
                                <label htmlFor='descriptions' className='label'>
                                  <span className='label-text-alt text-error'>{errors.descriptions}</span>
                                </label>
                              )}
                            </div>
                            <div className='w-full flex items-center justify-end mt-11'>
                              <button className='shadow-for-all-button w-[315px] h-[55px] rounded-xl bg-secondary text-white text-sm font-semibold tracking-[1px]' type='submit'>
                              Update
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    )}

                    {modalAction === "delete" && (
                      <div className='flex items-center justify-end gap-2 h-full'>
                        <div>
                          <button className='bg-red-600 w-16 h-full p-2 rounded-lg text-black' onClick={handleDeleteEvent}>
                         Yes
                          </button>
                        </div>
                        <div>
                          <button className='bg-white w-16 h-full p-2 rounded-lg text-black' onClick={handleCloseModalEvent}>
                          No
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {userEvents.map((usEvent) => {
                return(
                  <div className='flex items-center justify-start gap-6 border-b-2 py-7' key={`reservation-${usEvent.id}`}>
                    <div>
                      <div className='w-[50px] h-[75px] flex flex-col items-center justify-center rounded-2xl bg-white shadow-lg'>
                        <div className='text-sm font-semibold text-[#FF8900]'>{moment(usEvent?.date).format("DD")}</div>
                        <div className='text-xs font-medium text-[#C1C5D0]'>{moment(usEvent?.date).format("LLLL").slice(0, 3)}</div>
                      </div>
                    </div>
                    <div className='flex flex-col items-start justify-start text-[#373A42] gap-[5px]'>
                      <div className='text-2xl font-semibold tracking-[2px] mb-3.5 capitalize'>{usEvent?.title}</div>
                      <div className='text-xs tracking-[0.5px] capitalize'>{usEvent?.location}, Indonesia</div>
                      <div className='text-xs tracking-[0.5px]'>{moment(usEvent?.date).format("LLLL")}</div>
                      <div className='flex gap-3'>
                        <div className='text-xs traacking-[0.5px] text-[#FD841F]'>
                          <button onClick={() => handleModalEvent(usEvent?.id, "detail")}>Detail</button>
                        </div>
                        <div className='text-xs traacking-[0.5px] text-[#FD841F]'>
                          <button onClick={() => handleModalEvent(usEvent?.id, "update")}>Update</button>
                        </div>
                        <div className='text-xs traacking-[0.5px] text-[#FD841F]'>
                          <button onClick={() => handleModalEvent(usEvent?.id, "delete")}>Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              <div className='flex justify-center items-center'>
                {userEvents.length < 1 && (
                  <div className='flex flex-col justify-center items-center mt-60'>
                    <div className='text-xl tracking-[1px]'>
                  No Event Found
                    </div>
                    <div className='flex justify-center text-center text-sm text-[#B3B8B8] w-80 h-[62px] tracking-[0.5px] gap-5'>
                  It seems that you haven&apos;t added any Events yet. Maybe try looking for this?
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
        <div>
          <Footer />
        </div>
        <div>
          <input type='checkbox' id='loading' className='modal-toggle' checked={openModal} onChange={() => setOpenModal(!openModal)} />
          <div className='modal'>
            <div className='modal-box bg-transparent h-40 shadow-none overflow-hidden'>
              <div className='flex flex-col justify-center items-center'>
                <AiOutlineLoading3Quarters className='animate-spin' size={70} color='white' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageEvents
