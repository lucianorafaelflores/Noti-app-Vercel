import { Outlet } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import NavBar from "../components/NavBar";
import "./Layout.css"


export default function Layout() {
    return (
        <AuthProvider>
            <div>
                <NavBar />
                <Outlet />
            </div>
        </AuthProvider>
    );
}
