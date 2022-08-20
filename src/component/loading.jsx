import React, { useState, useEffect } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import { LinearProgress } from '@mui/material';

import { FACTS } from '../constant/facts';
import LoaderGIF from '../asset/images/loader/loader.gif';

export default function Loader({ text }) {
    const [index, setIndex] = useState(0);
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
    console.log(index);
    return (
        <div className="flex flex-col items-center">
            <img src={LoaderGIF} alt="loading gif" className="w-1/12" />
            <div className="text-md text-gray-400 mb-16 md:text-md">{text}</div>

            <div className="mt-4 h-screen w-8/12 p-6 text-center">
                <>
                    <div className="text-2xl my-6">
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
            </div>
        </div>
    );
}
