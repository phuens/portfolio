import React from 'react';
import Navbar from '../component/navbar';
import About from '../view/about';
import Gallery from '../view/pictures';
import Projects from '../view/projects';
import Books from '../view/book';

export default function Homepage() {
    const style = {
        mainContent: 'mt-14 text-white flex justify-center',
    };
    return (
        <div className="w-screen" style={{ backgroundColor: '#111828' }}>
            <Navbar />
            <div className="flex flex-col">
                <div className={style.mainContent}>
                    {/* <div className="w-full mt-16 h-screen px-4 sm:w-full md:w-4/12 ">
                        <About />
                    </div> */}

                    {/* <div className="w-full mt-20 h-screen px-3 sm:w-full md:w-10/12">
                        <Gallery />
                    </div> */}
                    <div className="w-full mt-16 px-6 md:w-6/12">
                        <Projects />
                    </div>
                    {/* <div className="w-full w-full md:w-10/12 mt-20">
                        <Books />
                    </div> */}
                </div>
            </div>
        </div>
    );
}
