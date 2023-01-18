import React, { useEffect, useState} from 'react';
import Modal from '@mui/material/Modal';
import {collection, getDocs} from 'firebase/firestore'

import db from '../api/firestore'

export default function TIL() {

    const [modalOpen, setModalOpen] = useState(false);
    const [items, setItems] = useState([])

    useEffect(()=> {
        const getData = async () => {
            const data = await getDocs(collection(db, "TIL/"))
            setItems(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
        }
        getData()
    }, [])



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
                                <p className="text-md text-center mb-4 text-white md:text-2xl">
                                    THANK YOU FOR WAITING ✌️
                                    <button
                                        onClick={() => setModalOpen(false)}
                                        className="border px-4 rounded-xl text-sm text-white float-right md:mt-2"
                                    >
                                        Close
                                    </button>
                                </p>
                                <form className="flex flex-col">
                                    <label className='text-white my-2'>
                                        Genre: &nbsp;&nbsp;
                                        <input className="p-2 text-black w-10/12 rounded-sm" name="genre" type="text" />  
                                    </label>
                                    <label className='text-white my-2'>
                                        Content: &nbsp;&nbsp;
                                        <input className="p-2 text-black w-10/12 rounded-sm" name="content" type="textarea" />  
                                    </label>
                                    <label className='text-white my-2'>
                                        Date: &nbsp;&nbsp;
                                        <input className="p-2 text-black w-10/12 rounded-sm" name="date" type="date" />  
                                    </label>

                                    <label className='text-white my-2'>
                                        Password: &nbsp;&nbsp;
                                        <input className="p-2 text-black w-10/12 rounded-sm" name="password" type="password" />  
                                    </label>
                                </form>

                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
    
            <hr className='mt-2'/>
            <div className='text-center mt-4 text-2xl'> Coming Soon</div>
            
            <div className='flex flex-row'>
                {items.map((item, index) => <div className='w-4/12 mx-2'><Jumbotron data={item} key={index}/> </div>)}
            </div>
        </div>

        </>
    );
}
