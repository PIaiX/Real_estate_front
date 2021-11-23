import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './Catalog';
import MainPage from './MainPage';

export default function AppRouter() {
    return (
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/catalog" element={<Catalog />} />
            </Routes>
    )
}
