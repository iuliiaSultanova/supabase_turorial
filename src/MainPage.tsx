import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Update from "/pages/Update";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Sandbox from "./pages/Sandbox";

export default function MainPage() {
    return (
      <BrowserRouter>
        <nav>
          <h1>本棚</h1>
          <Link to="/">Home</Link>
          <Link to="/create">本を追加</Link>
          <Link to="/sandbox">sandbox</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Update />} />
          <Route path="/sandbox" element={<Sandbox />}/>      
        </Routes>
      </BrowserRouter>
    );
  }