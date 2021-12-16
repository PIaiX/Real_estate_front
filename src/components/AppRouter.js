import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardPage from './CardPage';
import Catalog from './Catalog';
import MainPage from './MainPage';

export default function AppRouter() {
    return (
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/card-page" element={<CardPage />} />
            </Routes>
    )
}
