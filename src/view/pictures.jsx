import React from 'react';
import { GALLERY } from '../constant/gallery';

export default function Gallery() {
    return (
        <div className="flex overflow-x-auto snap-proximity snap-x">
            {GALLERY.map((item) => (
                <a className="snap-center" href={item.url} key={item.title} target="_">
                    <div
                        key={item.text}
                        className="flex m-2 p-2"
                        style={{
                            minWidth: '200px',
                            minHeight: '400px',
                            backgroundImage: `url(${item.path})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: '50% 50%',
                        }}
                    >
                        <div
                            className="text-4xl text-white-400 float-right items-end"
                            style={{
                                writingMode: 'vertical-rl',
                                textOrientation: 'mixed',
                                fontFamily: 'Major Mono Display',
                            }}
                        >
                            <b>{item.location}</b>
                        </div>

                        <div
                            className="text-sm text-gray-100 mt-1"
                            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                        >
                            {item.time}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
