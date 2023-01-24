import React, { useEffect, useState} from 'react';
import Modal from '@mui/material/Modal';
import {collection, doc, getDocs, setDoc, Timestamp, updateDoc} from 'firebase/firestore'
import moment from 'moment'

import db from '../api/firestore'

export default function TIL() {

    const [modalOpen, setModalOpen] = useState(false);
    const [items, setItems] = useState([])
    const [formValues, setFormValues] = useState({})
    const [errors, setErrors] = useState({});
    const [showSubmitted, setShowSubmitted] = useState(false)
    const hashedPassword = "d4c363025fb95b88563b72ac9f9914ba5e04b66d6e6b39591b90fffdd97a5f75"
    const crypto = require('crypto-js')


    const getData = async () => {
        const data = await getDocs(collection(db, "TIL/"))
        setItems(
            data.docs.map((doc) =>{
                const dateString = doc.data().date
                const date = new Date(dateString.toDate());
                const options = { month: 'long', day: 'numeric', year: 'numeric' };
                const formattedDate = date.toLocaleDateString('en-US', options);
                return { ...doc.data(), id: doc.id, date: formattedDate };
            }))
    }

    useEffect(()=> {    
        getData()
    }, [])


    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }


    const hash = (value) => {
        return crypto.SHA256(value).toString()
    }

    const handleLike = (id, count) => {
        updateDoc(doc(db, 'TIL/' + id), {
            liked: parseInt(count)+1
        })
        getData()

    }
    // ----------------------------------------------

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

        if (hashedPassword !== hash(formValues.password)){
            formError.password = "Password do not match"
        } 
        setErrors(formError)

        if (Object.keys(formError).length === 0){ 
            const time = Timestamp.fromDate(new Date( moment(formValues.date).toDate()))
            setDoc(doc(db, 'TIL/' + time), {
                content: formValues.content, 
                category: formValues.category, 
                date: time, 
                liked: 0, 
                source: formValues.source
            })
            setModalOpen(false)

            setShowSubmitted(true);
            setTimeout(() => {
                setShowSubmitted(false);
            }, 2000);
            getData()
        }

    }

    const Jumbotron = ({data}) => {
        return (
            <div className="border h-48 p-4 md:p-4 rounded-xl bg-white text-blue-900">
                <p className="">{data.category}</p>
                <hr/>
                <p className="text-md my-2 text-center">{data.content}</p>
                <hr/>
                <div className="mt-4 justify-between text-xs flex text-gray-400">
                    <button onClick={() => handleLike(data.id, data.liked)}> 🫰 {data.liked}</button>
                    <p>{data.date}</p>
                    <div className="">
                        <div className='text-xs text-gray-400'>Source: {data.source ? <i className='text-gray-400'>{data.source}</i> : <i className='text-gray-200'>NA</i>}</div>                    
                    </div>
                </div>
                
            </div>
        )
    }

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
                       Upload 🤔
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

                                    <div className='flex flex-row flex-wrap md:justify-between my-2'>
                                        <div className="w-full md:w-6/12 flex flex-col">
                                            <label className='text-white my-2'>
                                                <input onChange={handleChange} className="p-2 text-black w-full rounded-sm" name="category" type="text" placeholder="Category 📂"/>  
                                            </label>
                                            {errors.category && <p className="text-red-400">{errors.category}</p>}
                                        </div>
                                        <div className=" w-full md:w-6/12 flex flex-col">
                                            <label className='text-white my-2'>
                                                <input onChange={handleChange} className="p-2 float-right text-black w-full md:w-11/12 rounded-sm" name="date" type="date"/>  
                                            </label>
                                            {errors.date && <p className="text-red-400 text-right">{errors.date}</p>}
                                        </div>
                                        
                                    </div>
                                    <div className='flex flex-col mb-4'>
                                        <label className='text-white my-2'>
                                            <textarea onChange={handleChange} className="p-2 text-black w-full rounded-sm" rows="10" name="content" type="textarea" placeholder="Content 📖"/>  
                                        </label>
                                        {errors.content && <p className="text-red-400">{errors.content}</p>}
                                        <label className='text-white my-2'>
                                            <input onChange={handleChange} className="p-2 text-black w-full rounded-sm" name="source" type="text" placeholder="Source 🧬"/>  
                                        </label>
                                    </div>
                                    <div className="flex flex-row w-full flex-wrap">
                                        <div className="flex flex-col w-full md:w-8/12">
                                            <label className='text-white my-2 w-full md:w-11/12'>
                                                <input onChange={handleChange} className="p-2 text-black w-full md:w-10/12 rounded-sm" name="password" type="password" placeholder="Password 🔑"/>  
                                            </label>
                                            {errors.password && <p className="text-red-400">{errors.password}</p>}
                                        </div>
                                        <div className='py-4 w-full text-center md:w-4/12 md:text-left'>
                                            <button onClick={(e) => handleSubmit(e)} className="border px-12 md:px-4 rounded-xl text-md text-white hover:rounded-md hover:px-6 transition-all">
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
            
            <div className=''>
                {items.map((item, index) => <div className='w-full md:w-1/3 float-left mb-3' key={index}> <div className='px-2'><Jumbotron data={item} key={index}/></div> </div>)}
            </div>
        </div>
        { showSubmitted && <div className='bottom-8 -right-4 text-white absolute border rounded-bl-md  rounded-tl-md py-4 px-6 md:px-8 bg-white text-sm text-blue-900'> Submitted  🤙</div>}
            
        </>
    );
}
