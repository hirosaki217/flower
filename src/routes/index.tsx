import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts';
import Home from '../pages/Home';
const index = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    );
};

export default index;
