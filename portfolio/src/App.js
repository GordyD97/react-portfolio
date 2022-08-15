import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Projects from './projects';
import About-me from './about-me';
import Contact-me from './contact-me';

function App() {
    return (
        // routes will go in here
        <Router>
            <Routes>
                <Route path="/" element={<Home />}>
                    
                </Route>
                <Route path="/projects" element={<projects />}>

                </Route>
                <Route path="/about-me" element={<about-me />}>

                </Route>
                <Route path="/contact-me" element={<contact-me />}>

                </Route>
            </Routes>
        </Router>
    );
}

export default App;