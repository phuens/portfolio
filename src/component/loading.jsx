import React, { useState, useEffect } from 'react';

import Modal from '@mui/material/Modal';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import { FACTS } from '../constant/facts';
import LoaderGIF from '../asset/images/loader/loader.gif';

export default function Loader({ text, books }) {
    const [index, setIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const randomNumber = (max) => {
        return Math.floor(Math.random() * max + 1);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(randomNumber(FACTS.length - 1));
        }, 7000);
        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div className="flex flex-col items-center">
            <img src={LoaderGIF} alt="loading gif" className="w-1/12" />
            <div className="text-md text-gray-400 mb-6 md:text-md">{text}</div>

            <div className="mt-4 h-screen w-full p-2 text-center md:p-6 md:w-8/12">
                <>
                    <p className="text-xl font-bold text-blue-400 md:text-2xl">Did you know</p>
                    <div className="text-3xl md:text-4xl my-6">
                        {FACTS[index]['icon']}
                        &nbsp;&nbsp; {FACTS[index]['text']}
                    </div>
                    <p className="text-xs">
                        source:{' '}
                        <a href={FACTS[index]['link']} className="text-blue-400">
                            {FACTS[index]['source']}
                        </a>
                    </p>
                </>

                {books ? (
                    <div>
                        <button
                            className="w-full flex justify-center"
                            onClick={() => setModalOpen(true)}
                        >
                            <div className="mt-36 text-sm flex py-2 justify-center font-thin w-full md:w-12/12 ">
                                Why is this taking too long
                                <span className="mx-2 pt-1">
                                    <BsFillArrowRightCircleFill className="" />
                                </span>
                            </div>
                        </button>
                        <Modal
                            open={modalOpen}
                            onClose={() => setModalOpen(false)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <div className="w-12/12 mx-3 mt-24 flex justify-center">
                                <div
                                    className="px-4 py-12 md:w-6/12 md:p-12"
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

                                    <hr className="border-b border-gray-800 mb-4" />

                                    <p className="mt-4 text-white leading-loose">
                                        The book information is being{' '}
                                        <b>fetched from a notion database </b>
                                        that I use to update my reading list. In the name of
                                        automation, I fetch the data directly from notion so that
                                        the website will automatically update what I have read and
                                        am currently reading. However, my static website without a
                                        server cannot directly fetch data from the notion API. So I
                                        built a python Heroku app that acts as a{' '}
                                        <b>proxy to fetch the data from notion API</b> and send it
                                        to my website. This is unfortunately really slow but
                                        <b> thank you </b>for reading this and waiting for the books
                                        to load.
                                    </p>
                                </div>
                            </div>
                        </Modal>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}
