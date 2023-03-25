import React, { useState, useEffect } from 'react';

import { FACTS } from '../constant/facts';
import LoaderGIF from '../asset/images/loader/loader.gif';

export default function Loader({ text }) {
    const randomNumber = (max) => {
        console.log('this is the number: ', Math.floor(Math.random() * max + 1));
        return Math.floor(Math.random() * max + 1);
    };
    const [index, setIndex] = useState(randomNumber(FACTS.length - 1));

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(randomNumber(FACTS.length - 1));
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="flex flex-col items-center">
            <p className="-mb-8 text-2xl"> {text} </p>
            <img src={LoaderGIF} alt="loading gif" className="w-2/12" />

            <div className="mt-4 h-screen w-full p-2 text-center md:p-2 md:w-8/12">
                <>
                    <p className="text-xl font-bold text-blue-400 md:text-2xl">Did you know</p>
                    <div className="text-3xl md:text-4xl my-6">
                        {FACTS[index]['icon']}
                        <h1>{index}</h1>
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
