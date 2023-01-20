import React, { useEffect, useState} from 'react';
import Modal from '@mui/material/Modal';
import {collection, doc, getDocs, setDoc, Timestamp} from 'firebase/firestore'

import db from '../api/firestore'

export default function TIL() {

    const [modalOpen, setModalOpen] = useState(false);
    const [items, setItems] = useState([])
    const [formValues, setFormValues] = useState({})
    const [errors, setErrors] = useState({});

    useEffect(()=> {
        const getData = async () => {
            const data = await getDocs(collection(db, "TIL/"))
            setItems(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
        }
        getData()
    }, [])

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        console.log("====>", formValues)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let formError = {}
        if (!formValues.category){
            formError.category = "Category is required"
        }
        if (!formValues.date){
            formError.date = "Date is required"
        }
        if (!formValues.content){
            formError.content = "Content is required"
        }

        if (!formValues.password){
            formError.password = "Password is required"
        }
        setErrors(formError)

        if (Object.keys(formError).length === 0){ 
            const time = Timestamp.fromDate(new Date(formValues.date))
            setDoc(doc(db, 'TIL/' + time), {
                content: formValues.content, 
                category: formValues.category, 
                date: time
            })
            console.log("written to the database")
        }

    }

    const Jumbotron = ({data}) => {
        return (
            <div className="border flex flex-col p-4 md:p-4 rounded-xl bg-white text-sm text-blue-900">
                
                <p className="text-xl mb-2 text-center">{data.content}</p>
                <hr/>
                <div className="flex flex-row mt-4 justify-between text-xs">
                    <button className=''>🫰 {data.liked}</button>
                    <p>Monday 21st June 2022</p>
                </div>
            </div>
        )
    }

    console.log(items)
    return (
        <>
        <div className="flex flex-col ">
            <div className='flex flex-row'>
                <div className='w-10/12'>
                    <span style={{ fontFamily: 'Major Mono Display' }}>
                        <b>today i learned</b>
                    </span>
                </div>

                <div className="w-full float-right">
                    <button
                        className="border flex flex-row px-4 md:px-4 rounded-xl bg-white text-sm text-blue-900 float-right"
                        onClick={() => setModalOpen(true)}
                    >
                       TIL 🤔
                    </button>
                    <Modal
                        open={modalOpen}
                        onClose={() => setModalOpen(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div className="w-12/12 mt-24 flex justify-center">
                            <div
                                className="px-4 py-12 w-11/12 md:w-10/12 md:p-12"
                                style={{
                                    backgroundColor: '#070911',
                                    boxShadow: '1px 2px 12px -1px rgba(255,255,255,0.66)',
                                }}
                            >
                                <p className="text-md text-center mb-20 text-white md:text-2xl">
                                   
                                    <button
                                        onClick={() => setModalOpen(false)}
                                        className="border px-4 py-3 transition-all rounded-full text-sm text-white float-right md:mt-2 hover:text-indigo-900 hover:bg-white"
                                    >
                                        X
                                    </button>
                                </p>
                                <form className="flex flex-col px-4">

                                    <div className='flex flex-row justify-between my-2'>
                                        <div className="w-6/12 flex flex-col">
                                            <label className='text-white my-2'>
                                                <input onChange={handleChange} className="p-2 text-black w-full rounded-sm" name="category" type="text" placeholder="Category 📂"/>  
                                            </label>
                                            {errors.category && <p className="text-red-400">{errors.category}</p>}
                                        </div>
                                        <div className="w-6/12 flex flex-col">
                                            <label className='text-white my-2'>
                                                <input onChange={handleChange} className="p-2 float-right text-black w-11/12 rounded-sm" name="date" type="date"/>  
                                            </label>
                                            {errors.date && <p className="text-red-400 text-right">{errors.date}</p>}
                                        </div>
                                    </div>
                                    <div className='flex flex-col mb-4'>
                                        <label className='text-white my-2'>
                                            <textarea onChange={handleChange} className="p-2 text-black w-full rounded-sm" rows="4" name="content" type="textarea" placeholder="Content 📖"/>  
                                        </label>
                                        {errors.content && <p className="text-red-400">{errors.content}</p>}
                                    </div>
                                    <div className="flex flex-row w-full">
                                        <div className="flex flex-col">
                                            <label className='text-white my-2 w-11/12'>
                                                <input onChange={handleChange} className="p-2 text-black w-10/12 rounded-sm" name="password" type="password" placeholder="Password 🔑"/>  
                                            </label>
                                            {errors.password && <p className="text-red-400">{errors.password}</p>}
                                        </div>
                                        <div className='py-4'>
                                            <button onClick={(e) => handleSubmit(e)} className="border px-4 rounded-xl text-md text-white hover:rounded-md hover:px-6 transition-all">
                                                Submit
                                            </button>
                                        </div>
                                       
                                    </div>
                                </form>

                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
    
            <hr className='mt-2 mb-8'/>
            
            <div className='flex flex-row'>
                {items.map((item, index) => <div className='w-4/12 mx-2'><Jumbotron data={item} key={index}/> </div>)}
            </div>
        </div>

        </>
    );
}
