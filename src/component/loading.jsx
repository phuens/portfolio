import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader({ text }) {
    return (
        <div className="flex flex-col items-center">
            <div className="my-4 text-xl text-gray-400 md:text-2xl">{text}</div>
            <div>
                <CircularProgress />
            </div>
        </div>
    );
}
