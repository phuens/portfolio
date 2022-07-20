import React from 'react';
import Hedshot from '../asset/images/about/headshot.png';
import { SOCIAL_MEDIA } from '../constant/constants';
import Jobs from '../component/jobPositions';
import { AiOutlineMail } from 'react-icons/ai';

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
                    technology serve communities. He is currently a master's student with a focus on
                    computer vision at the{' '}
                    <a href="https://www.usask.ca/" target="_" className="text-blue-500">
                        University of Saskatchewan.
                    </a>{' '}
                    Other than coding, Phuntsho can be seen playing soccer, squash, or any sport he
                    can find people to play with. However, you will never find him referring to
                    himself in the third person other than here. you can reach phuntsho at
                    <span className="text-blue-400 "> c.phuntshonorbu@gmail.com.</span>
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
                <a
                    className="underline text-blue-400 hover:text-blue-300 transition-all duration-200 ease-in"
                    href="https://phuens.github.io/portfolio/resume.pdf"
                    target="_"
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
