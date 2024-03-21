import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TopNavBar from "./Components/Headers/TopNavBar";
import SubNavbar from "./Components/Headers/SubNavbar";
import Registration from "./pages/Auth/Registration/Registration";
import Footer from "./Components/Footer/Footer";
import Register from "./pages/Auth/Register/Register";
import Session from "./pages/Session/Sessions";
import SessionPage from "./pages/Session/SessionsPage";
import Blogs from "./pages/Blogs/Blogs";
import CoachDetail from "./pages/Session/CoachDetail";

const App = () => {
  return (
    <BrowserRouter>
      <TopNavBar />
      <SubNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/verification" element={<VerificationScreen />} /> */}
        <Route path="/session" element={<Session />} />
        <Route path="/session/:sessionId" element={<SessionPage/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path='/coachdetail/:coachId' element={<CoachDetail/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;