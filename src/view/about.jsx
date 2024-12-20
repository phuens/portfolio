import React from 'react';
import Hedshot from '../asset/images/about/headshot.jpg';
import { SOCIAL_MEDIA } from '../constant/constants';
import Jobs from '../component/jobPositions';
import ReactGa from 'react-ga4';

export default function About() {
    const style = {
        headshotContainer:
            'flex flex-row items-center justify-around text-2xl md:text-3xl mt-3 mb-6',
        headshot: ' items-center rounded-full w-2/12  md:w-2/12',
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

                <div className="my-4 ">
                    Phuntsho is a software developer from Bhutan with a passion to leverage and make
                    technology serve communities. He is currently a software developer at {' '}
                    <a href="https://eda.sw.siemens.com/en-US/" target="_" className="text-blue-500">
                     Siemens EDA
                    </a> in Saskatoon.  
                    Other than coding, Phuntsho can be seen playing pickleball and getting crushed by 60 year olds every day. However, you will never find him referring to
                    himself in the third person other than here. 
                </div>
            </div>

            <div className="my-4 flex flex-row">
                {SOCIAL_MEDIA.map((item) => {
                    return (
                        <a
                            key={item.text}
                            className={style.socialMedia}
                            href={item.url}
                            target="_"
                            onClick={() => {
                                ReactGa.event({ category: item.text, action: item.text });
                            }}
                        >
                            {item.icon}
                        </a>
                    );
                })}
                <a
                    className="underline text-blue-400 hover:text-blue-300 transition-all duration-200 ease-in"
                    href="https://phuens.github.io/portfolio/resume.pdf"
                    target="_"
                    onClick={() => {
                        ReactGa.event({ category: 'resume', action: 'viewed resume' });
                    }}
                >
                    resume
                </a>
            </div>

            <div className="mt-20 ">
                <Jobs />
            </div>
        </>
    );
}
