//import Auth from "./Auth";
//import Account from "./Account";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Update from "./pages/Update";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Sandbox from "./pages/Sandbox";

/* export default function App() {
  const [session, setSession] = useState(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? (
        <Auth />
      ) : ( 
        <Account key={session.user.id} session={session} />
     )}
    </div>
  );
} */

export default function App() {
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

