import React, { useEffect, useState} from 'react';
import Modal from '@mui/material/Modal';

import {fetchTIL} from '../api/api'

export default function TIL() {

    const [modalOpen, setModalOpen] = useState(false);
    const [items, setItems] = useState([])

    // useEffect(()=> {
    //     async function fetchItems(){
    //         const data = await fetchTIL()
    //         console.log("hello world")
    //         setItems(data)
            
    //         console.log("-----> ", data)
    //     }
    //     fetchItems()
    // }, [])



    const jumbotron = ({data}) => {
        <div className="flex flex-col">
            {data.map((item) => (
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.date}</p>
                    <hr/>

                    <div>
                        {item.content}
                    </div>

                    <div>
                        <span>UP</span> <span>{item.liked}</span>   
                    </div>
                </div>
            ))}
        </div>
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

                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
    
            <hr className='mt-2'/>
            <div className='text-center mt-4 text-2xl'> Coming Soon</div>
        </div>

        </>
    );
}
