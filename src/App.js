import React, { useEffect } from 'react';
import Homepage from './view/homepage';
import ReactGa from 'react-ga';

function App() {
    useEffect(() => {
        ReactGa.initialize('G-1D905FB5LK');
        ReactGa.pageview('/');
    });
    return <Homepage />;
}

export default App;
