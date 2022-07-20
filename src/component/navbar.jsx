import React from 'react';
import { NAVIGATION } from '../constant/constants';
import Emoji from './emoji';

export default function Navbar() {
    return (
        <div
            className="w-screen flex py-6 text-gray-100 fixed z-10"
            style={{ backgroundColor: '#111828' }}
        >
            {NAVIGATION.map((item) => (
                <div key={item.text} className="mx-6 text-centers">
                    <Emoji icon={item.icon} size="10" text={item.text} />
                </div>
            ))}
        </div>
    );
}
