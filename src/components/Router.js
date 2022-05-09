import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthApp from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
          </>
        ) : (
          <Route path="/" element={<AuthApp />} />
        )}
      </Routes>
    </Router>
  );
};
export default AppRouter;
