import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Pricing from "./pages/Pricing/Pricing";
import Program from "./pages/Program/Program";
import Login from "./pages/Authentication/Login/Login";
import Registration from "./pages/Authentication/Registration/Registration";

function App() {
  return <div>

<Routes>
<Route path="/" element={<Home/>}  />
<Route path="/aboutUs" element={<AboutUs/>}  />
<Route path="/pricing" element={<Pricing/>}  />
<Route path="/program" element={<Program/>}  />
<Route path="/login" element={<Login/>}  />
<Route path="/register" element={<Registration/>}  />
<Route path="/*" element={<h1>404 Page is Not Found</h1>}  />

</Routes>

  </div>;
}

export default App;
