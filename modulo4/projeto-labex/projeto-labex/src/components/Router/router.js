import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "../Pages/AdminPage/index";
import CreateTripPage from "../Pages/CreateTripPage/index";
import HomePage from "../Pages/HomePage/index";
import ListTripsPage from "../Pages/ListTripsPage/index";
import LoginPage from "../Pages/LoginPage/index";
import TripDetailsPage from "../Pages/TripDetailsPage/index";
import ApplicationFormPage from "../Pages/ApplicationFormPage/index";

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