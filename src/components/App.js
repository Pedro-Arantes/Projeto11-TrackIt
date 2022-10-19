
import GlobalStyle from "../style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"
import LoginPage from "../pages/LoginPage";
import TodayPage from "../pages/TodayPage";
import RegisterPage from "../pages/RegisterPage";
import HabitPage from "../pages/HabitPage";
import HistoricPage from "../pages/HistoricPage";
import DataProvider from "../context/Auth";


export default function App() {


    return (
        <BrowserRouter>
            <GlobalStyle />
            <DataProvider>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/hoje" element={<TodayPage />} />
                    <Route path="/cadastro" element={<RegisterPage />} />
                    <Route path="/habitos" element={<HabitPage />} />
                    <Route path="/historico" element={<HistoricPage />} />
                </Routes>
            </DataProvider>

        </BrowserRouter>

    )
}


