import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import CreateTripPage from "../pages/CreateTripPage";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path="/admin/trips/list" element={<AdminPage/>} />
                <Route path="/admin/trips/create" element={<CreateTripPage/>} />
                <Route path="/trips/list" element={<ListTripsPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/admin/trips/:id" element={<TripDetailsPage/>} />
                <Route path="/trips/application" element={<ApplicationFormPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;