import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Pricing from "./pages/Pricing/Pricing";
import Program from "./pages/Program/Program";
import Login from "./pages/Authentication/Login/Login";
import Registration from "./pages/Authentication/Registration/Registration";
import NavigationBar from './components/navbar/NavigationBar'
import Footer from "./components/footer/Footer";

function App() {
  return <div>
<NavigationBar />
<Routes>
<Route path="/" element={<Home/>}  />
<Route path="/aboutUs" element={<AboutUs/>}  />
<Route path="/pricing" element={<Pricing/>}  />
<Route path="/program" element={<Program/>}  />
<Route path="/login" element={<Login/>}  />
<Route path="/register" element={<Registration/>}  />
<Route path="/*" element={<h1>404 Page is Not Found</h1>}  />

</Routes>
<Footer/>
  </div>;
}

export default App;
