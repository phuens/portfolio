import React from 'react';
import { NAVIGATION } from '../constant/constants';
import Emoji from './emoji';

export default function Navbar({ tabChange }) {
    return (
        <div
            className="w-screen flex py-6 text-gray-100 fixed z-10"
            style={{ backgroundColor: '#111828' }}
        >
            {NAVIGATION.map((item) => (
                <button
                    onClick={() => tabChange(item.text)}
                    key={item.text}
                    className="mx-6 text-centers"
                    value={item.text}
                >
                    <Emoji icon={item.icon} size="10" text={item.text} />
                </button>
            ))}
        </div>
    );
}
