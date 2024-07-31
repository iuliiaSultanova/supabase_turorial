import MainPage from "./MainPage";
import Update from "./pages/Update";
import Home from "./pages/Home";
import Create from "./pages/Create";
//import Sandbox from "./pages/Sandbox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/AuthProvider";
import Auth from "./Auth";
import ProtectedRoute from "./ProtectedRoute";


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Update />} />
          {/* <Route path="/sandbox" element={<Sandbox />}/>  */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

