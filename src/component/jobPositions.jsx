import React from 'react';
import { ABOUT } from '../constant/constants';
import USASK from '../asset/images/about/usask.png';
import TTPL from '../asset/images/about/ttpl.png';
import WATSON from '../asset/images/about/watson.png';

const style = {
    year: 'text-xs ',
    position: 'text-gray-400 font-bold',
    description: 'mt-2 text-gray-700',
    company: 'underline my-2 text-sm',
    country: 'text-xs text-gray-700',
};

const Layout = ({ info, image, index }) => {
    let container = '';
    index % 2 === 1
        ? (container = 'w-full text-center border-l border-r')
        : (container = 'w-full text-center ');
    return (
        <div className={container}>
            <p className={style.year} style={{ color: '#a0a6ba' }}>
                {info.year}
            </p>
            <p className={style.position} style={{ fontFamily: 'Lato' }}>
                {info.position}
            </p>
            {/* <p className={style.description}>{info.description}</p> */}
            <a href={info.url} target="_" style={{ color: '#717999' }}>
                <p className={style.company}>{info.shortForm}</p>
            </a>
            {/* <p className={style.country} style={{ color: '#a0a6ba' }}>
                {info.country}
            </p> */}
            {/* <div className=" w-full mt-2">
                <a href={info.url} target="_" className="flex justify-center">
                 <img src={image} alt="pictures" className="w-3/12 " /></a>
            </div> */}
        </div>
    );
};

export default function Jobs() {
    const images = [USASK, TTPL, WATSON];
    return (
        <>
            {/* <hr /> */}
            <div className="flex my-4">
                {ABOUT.map((item, index) => (
                    <div className="w-4/12">
                        <Layout info={item} index={index} image={images[index]} key={item.year} />
                    </div>
                ))}
            </div>
            {/* <hr /> */}
        </>
    );
}
