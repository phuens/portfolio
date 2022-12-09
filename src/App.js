import React, { useEffect } from 'react';
import Homepage from './view/homepage';
import ReactGa from 'react-ga';

function App() {
    useEffect(() => {
        ReactGa.initialize('G-VJJNDJ63Y5');
        ReactGa.pageview('/');
    });
    return <Homepage />;
}

export default App;
