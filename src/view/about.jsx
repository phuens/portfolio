import React from 'react';
import Hedshot from '../asset/images/about/headshot.png';
import { SOCIAL_MEDIA } from '../constant/constants';
import Jobs from '../component/jobPositions';

export default function About() {
    const style = {
        headshotContainer:
            'flex flex-row items-center justify-around text-2xl sm:text-2xl md:text-3xl mt-3 mb-6',
        headshot: ' items-center rounded-full w-2/12 sm:w-full md:w-2/12',
        socialMedia: 'text-2xl pr-8 text-gray-400',
    };
    return (
        <>
            <div className="flex flex-col">
                <div className={style.headshotContainer}>
                    <img className={style.headshot} src={Hedshot} alt="author's portrait" />
                    <span style={{ fontFamily: 'Major Mono Display' }}>
                        <b>phuntsho norbu</b>
                    </span>
                </div>

                <div className=" my-4">
                    A 22 year old software developer from Bhutan with a passion to create products
                    that impact. I'm currently interested in Web3 and meditation. For me programming
                    is a means not an end for creating. I love to talk about various topics other
                    than technology, currently about the meaning of life and exploring what it means
                    to "make it".
                </div>
            </div>

            <div className="my-4 flex flex-row">
                {SOCIAL_MEDIA.map((item) => {
                    return (
                        <a key={item.text} className={style.socialMedia} href={item.url} target="_">
                            {item.icon}
                        </a>
                    );
                })}
                <a className="underline text-gray-400" href="phuntsho.com" target="_">
                    resume
                </a>
            </div>

            <div className="mt-20 ">
                <Jobs />
            </div>
        </>
    );
}
