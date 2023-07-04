import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { HomePage, DatabasePage, GuidesPage, ItemsPage, LocationsPage } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/database" element={<DatabasePage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/items" element={<ItemsPage />} />
        {/* <Route path="/locations" element={<LocationsPage />} /> */}

      </Routes>
    </BrowserRouter>

);
