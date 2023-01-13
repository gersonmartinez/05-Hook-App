import { Navigate, Route, Routes } from "react-router-dom"

import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./Context/UserProvider";

export const MainApp = () => {
    return (
        <UserProvider>   {/* Se agregó en la clase 160 solo el UserProvider */}
            {/* <h1>MainApp</h1> */}
            <Navbar />
            <hr/>

            <Routes>
                <Route path="/" element = { <HomePage />} />
                <Route path="about" element = { <AboutPage />} />
                <Route path="login" element = { <LoginPage />} />
 
                <Route path="/*" element = { <Navigate to="/about" /> } />   {/* Si se escribe una ruta que no existe, entonces con esto ya no le aparecerá error 404 */}
            </Routes>
        </UserProvider>
    )
}

