import React, { useEffect } from 'react';
import Homepage from './view/homepage';
import ReactGa from 'react-ga4';

function App() {
    useEffect(() => {
        ReactGa.initialize('G-VJJNDJ63Y5');
    });
    return <Homepage />;
}

export default App;
