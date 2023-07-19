import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import UserAuth from "./Pages/User/User";
import ForgotPass from "./Pages/ForgotPass/ForgotPass";
import LiveSessionPage from "./Components/Live/Live";
import HomePage from "./Components/Home/Homepage";
import ClassLibraryPage from "./Components/ClassLib/ClassLib";
import InstructionalVideosPage from "./Components/Instruction/Instruction";


function App() {
  const isLoggedIn = false;
  return (
    <Router>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-auth" element={<UserAuth />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/instruction" element={<InstructionalVideosPage/>} />
          <Route path="/live" element={<LiveSessionPage />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/lib" element={<ClassLibraryPage/>} />
          <Route path="/Homepage" element={<HomePage/>} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
