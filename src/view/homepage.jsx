import React, { useState} from 'react';
import Navbar from '../component/navbar';
import About from '../view/about';
import Gallery from '../view/pictures';
import Projects from '../view/projects';
import Books from '../view/book';
import TIL from '../view/TIL'


export default function Homepage() {
    function tabChange(param) {
        setActiveTab(param);
    }

    const style = {
        mainContent: 'mt-14 text-white flex justify-center',
    };
    const [activeTab, setActiveTab] = useState('About');

    return (
        <div className="w-screen" style={{ backgroundColor: '#111828' }}>
            <Navbar tabChange={tabChange} />
            <div className="flex flex-col">
                <div className={style.mainContent}>
                    {(() => {
                        switch (activeTab) {
                            case 'About':
                                return (
                                    <div className="w-full mt-16 h-screen px-4  md:w-4/12 ">
                                        <About />
                                    </div>
                                );
                            case 'Projects':
                                return (
                                    <div className="w-full my-16 pb-20 px-6 md:w-6/12">
                                        <Projects />
                                    </div>
                                );

                            case 'Books':
                                return (
                                    <div className="w-full w-full md:w-10/12 mt-20">
                                        <Books />
                                    </div>
                                );

                            case 'Pictures':
                                return (
                                    <div className="w-full mt-20 h-screen px-3 sm:w-full md:w-10/12">
                                        <Gallery />
                                    </div>
                                );
                            
                                case 'TIL':
                                    return (
                                        <div className="w-full mt-16 mb-12 px-4 md:w-10/12">
                                            <TIL />
                                        </div>
                                    );

                            default:
                                return (
                                    <div className="w-full mt-16 px-6 md:w-6/12">
                                        <About />
                                    </div>
                                );
                        }
                    })()}
                </div>
            </div>
        </div>
    );
}
