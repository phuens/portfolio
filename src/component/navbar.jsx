import React from 'react';
import { NAVIGATION } from '../constant/constants';
import Emoji from './emoji';
import ReactGa from 'react-ga4';

export default function Navbar({ tabChange }) {
    const onclick = (text) => {
        tabChange(text);
        ReactGa.event({
            action: text,
            category: text,
            label: text,
            values: text,
        });
    };
    return (
        <div
            className="w-screen flex py-6 text-gray-100 fixed z-10"
            style={{ backgroundColor: '#111828' }}
        >
            {NAVIGATION.map((item) => (
                <button
                    onClick={() => onclick(item.text)}
                    key={item.text}
                    className="mx-2 md:mx-6 text-centers hover:font-bold"
                    value={item.text}
                >
                    <Emoji icon={item.icon} size="10" text={item.text} />
                </button>
            ))}
        </div>
    );
}
